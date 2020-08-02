const User = require('../../model/user');
//TODO : When access here, make log
exports.list = (req, res) => {
    if(!req.decoded.admin){
        return res.status(403).json({
            message: 'Access Error'
        })
    }

    User.find({})   // mongoose Query  find,findById, findOne, where static
    .then(
        users=>{
            res.json({users})
        }
    )
}