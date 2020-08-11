const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    //const token = req.headers['x-access-token'] || req.query.token;
    const token = req.cookies['jwt'] || req.query.token;

    if(!token){
        return res.status(403).json({
            success : false,
            message : 'not login'
        });
    }

    //create a promise that decodes the token
    const promise = new Promise(
        
        (resolve, reject) =>{
            jwt.verify(token, req.app.get('jwt-secret'), (err,decoded) =>{
                if(err) reject(err);
                resolve(decoded);
            })
        }
    )

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        });
    }

    promise.then((decoded) => {
        req.decoded = decoded;
        next();
    }).catch(onError);
}

module.exports = authMiddleware;