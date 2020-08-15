const jwt = require('jsonwebtoken');
const User = require('../../model/user');

// Todo : Login Failed 1, 2 => id, pw에 따른 에러

exports.register = (req,res) => {
    const {username, password} = req.body;
    let newUser = null;
    console.log("registerregisterregister");
    // create a newUser
    const create = (user) => {
        if(user) throw new Error('User already exist');
        else return User.create(username, password);
    }

    // count User
    const count = (user) => {
        newUser = user;
        return User.count({}).exec();  //User = new Schema
    }

    // assign admin if count is 1
    const assign = (count) => {
        if(count === 1) return newUser.assignAdmin();
        else return Promise.resolve(false);
    }

    // respond to the client
    const respond = (isAdmin) =>{
        // res.json({
        //     message: 'Registered successfully',
        //     admin : isAdmin ? true : false
        // })
        res.redirect('/home?Login='+req.body.username);
    }

    // Error
    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    // check Username duplication
    User.findOneByUsername(username)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError)

}