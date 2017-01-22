var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
development :{
    db:'mongodb://localhost/multivision',
    rootPath : rootPath,
    port: process.env.PORT || 3030
},
    production :{
        db:'mongodb://karthik91:karthik91@ds145148.mlab.com:45148/karthikmultivision',
        rootPath : rootPath,
        port: process.env.PORT || 80
    }
}