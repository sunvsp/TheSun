const Role = require('../models/role.model')

exports.create = (req,res,next)=>{
    console.log(req);
    Role.findOne({roleName:req.body.roleName},(err,result)=>{
        if(err){return next(err)}
        if(result){
            res.status(409).json({status:409,message:'Role is Duplicate'})
        }else{
            const role = new Role(req.body)
            role.save(err=>{
                if(err){return next(err)}
                res.json(role)
            })
        }

    })
}