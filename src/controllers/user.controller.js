const User = require('../models/user.model')

exports.findAll = (req,res,next)=>{
    User.find({},function(err,result){
        var userMap = {};
        result.forEach(function(user) {
        userMap[user._id] = user;
    });
    res.json(userMap);  
    })
}
exports.findById = (req,res,next)=>{
    User.findById(req.params.id,function(err,result){
        if(err){return next(err)}
        res.json(result)
    }) 
}
exports.findByUserName = (req,res,next)=>{
    User.find({username:req.params.username},function(err,result){
        var userMap = {};
        result.forEach(function(user) {
        userMap[user._id] = user;
    });
    res.json(userMap);  
    })
}
exports.create = (req,res,next)=>{
    User.findOne({username:req.body.username},(err,result)=>{
        if(err){return next(err)}
        if(result){
            res.status(409).json({status:409,message:'Username is Duplicate'})
        }else{
            const user = new User(req.body)
            user.save(err=>{
                if(err){return next(err)}
                res.json(user)
            })
        }

    })
}
exports.update = (req,res,next)=>{
    User.findOneAndUpdate({username:req.body.username},req.body,(err,result)=>{
        if(err){return next(err)}
        else
            res.json(result)
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

