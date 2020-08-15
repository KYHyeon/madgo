const jwt = require('jsonwebtoken');
const User = require('../../model/user');
const cookieParser = require('cookie-parser');

exports.login = (req, res) => {
    const {username, password} = req.body;
    const secret = req.app.get('jwt-secret');
    // check user && generate jwt
    const check = (user) => {
        if(!user) {
            throw new Error('login failed1'); // id가 없으나, id/pw 구분 안되는 보안법
        }else{
            if(user.verify(password)){
                const promise = new Promise((resolve, reject) => {
                    jwt.sign({
                        _id: user._id,
                        username: user.username,
                        admin: user.admin
                    },
                    secret,{
                        algorithm : 'HS256',
                        expiresIn:'7d',
                        //issuer: '',
                        subject: 'userInfo'
                    }, (err, token) => {
                        if(err) reject(err);
                        resolve (token);
                    })
                }) //https://github.com/auth0/node-jsonwebtoken
                return promise;
            } else{
                throw new Error('login failed2');
            }
        }
    }

    // respond to the client
    const respond = (token) =>{
        // res.json({
        //     message: 'Login successfully',
        //     token
        // });
        res.cookie('jwt', token);
        res.redirect('/home?Login='+req.body.username);
    }

    // Error
    const onError = (error) => {
        // res.status(403).json({
        //     message: error.message
        // });
        console.log("onError");
            
        res.redirect(307, '/home?Login=Fail');
        //res.redirect('/home?Login='+"cannot");
    }

    // check Username duplication
    User.findOneByUsername(username)
    .then(check)   //create 는 token 을 발급해줌.
    .then(respond)
    .catch(onError)  //Promise chain
}