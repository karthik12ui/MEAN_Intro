var crypto = require('crypto'); // Included with Node
exports.createSalt = function() {
    return crypto.randomBytes(128).toString('base64');
}

exports.hashPwd = function(salt,pwd) {
    var hmac = crypto.createHmac('sha1',salt);
    // return hmac.update(pwd).digest('hex');
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
}
