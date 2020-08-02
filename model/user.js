// mongoose 에서 user정보를 MongoDB에 넣기 위한 Schema
const mongoose = require('mongoose');
const crypto = require('crypto');
const config = require('./config');

const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    admin: { type: Boolean, default: false }
})
// User.statics => redefining functions that exist directly on your Model.
// User.methods => define
// https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
// create new User document
User.statics.create = function(username, password) {
    
    const encrypted = crypto.createHmac('sha1', config.secret)
                    .update(password)
                    .digest('base64');
    
    const user = new this({
        username,
        password: encrypted
    })
    // return the Promise
    return user.save()
}

// find one user by username
User.statics.findOneByUsername = function(username) {
    return this.findOne({
        username
    }).exec()  // exec : query정의 후 실행
}

// verify the password of the User
User.methods.verify = function(password) {

    const encrypted = crypto.createHmac('sha1', config.secret)
                    .update(password)
                    .digest('base64');

    return this.password === encrypted;
}

//assing to Admin
User.methods.assignAdmin = function() {
    this.admin = true
    return this.save()
}

module.exports = mongoose.model('User', User)