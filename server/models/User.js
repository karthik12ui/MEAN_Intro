var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = new mongoose.Schema({
    firstName: {type:String, required:'{PATH} is required!'},
    lastName:{type:String, required:'{PATH} is required!'},
    username:{
        type:String,
        required:'{PATH} is Required !',
        unique : true  //Creates Uniq index
    },
    salt:{type:String, required:'{PATH} is required!'},
    hashed_pwd: {type:String, required:'{PATH} is required!'},
    roles : [String]
});
userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole : function (role) {
        return this.roles.indexOf(role) > -1;
    }
};

var User = mongoose.model('user',userSchema);
function createDefaultUsers(){
    User.find({}).exec(function(err,collection){
        if(collection.length === 0){
            var salt,hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt,'karthik');
            User.create({firstName:'kar',lastName:'thik',username:'karthik',salt: salt, hashed_pwd:hash, roles :['admin']});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt,'sai');
            User.create({firstName:'sai',lastName:'teju',username:'sai',salt: salt, hashed_pwd:hash, roles :[]});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt,'nathani');
            User.create({firstName:'nat',lastName:'hani',username:'nathani',salt: salt, hashed_pwd:hash});
        }
    })
};
exports.createDefaultUsers = createDefaultUsers;
