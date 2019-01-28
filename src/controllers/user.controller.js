const User = require('../models/user.model')

exports.findAll = (req,res,next)=>{
   
    User.find({}).toArray(function(err,result){
        if(err){return next(err)}
        res.json(result)
    })
  
}
exports.findById = (req,res,next)=>{
    User.findById(req.params.id,function(err,result){
        if(err){return next(err)}
        res.json(result)
    })
    
}
exports.create = (req,res,next)=>{
    User.findOne({username:req.body.username},(err,result)=>{
        if(err){return next(err)}
        if(result){
            res.json({status:201,message:'Username is Duplicate'})
        }else{
            const user = new User(req.body)
            user.save(err=>{
                if(err){return next(err)}
                res.json(user)
            })
        }

    })
}
exports.delete = (req,res,next)=>{
    User.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            return next(err)
        }else{
            res.json(result)
        }
    })
}

