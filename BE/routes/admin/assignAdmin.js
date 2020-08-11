const User = require('../../model/user');

exports.assignAdmin = (req, res) =>{
    if(!req.decoded.admin){
        return res.status(403).json({
            message: 'Access Error'
        })
    }

    User.findOneByUsername(req.params.username)
    .then(
        user => user.assignAdmin
    ).then(
        res.json({
            success: true
        })
    )
}