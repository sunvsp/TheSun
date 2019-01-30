const Role = require('../models/role.model')

exports.create = (req,res,next)=>{
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

exports.findAll = (req,res,next)=>{
    Role.find({},function(err,result){
        if(err){return next(err)}
        else
        var roleMap = {};
        result.forEach(function(role) {
        roleMap[role._id] = role;
        
    });
    res.json(roleMap);  
    })
}
exports.findById = (req,res,next)=>{
    Role.findById(req.params.id,function(err,result){
        if(err){return next(err)}
        res.json(result)
    }) 
}

exports.delete = (req,res,next)=>{
    Role.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            return next(err)
        }else{
            res.json(result)
        }
    })
}
exports.update = (req,res,next)=>{
    Role.findOneAndUpdate({roleName:req.body.roleName},req.body,(err,result)=>{
        if(err){return next(err)}
        else
            res.json(result)
    })
}

