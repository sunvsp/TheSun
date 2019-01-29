const user = require('../src/controllers/user.controller')
const role = require('../src/controllers/role.controller')

module.exports = function(app){
    app.get('/',function(req,res){
        res.send({message : 'Welcome hereGreen'})
    })
    //User
    app.get('/users',user.findAll)
    app.get('/users/id/:id',user.findById)   //findbyid
    app.post('/users/create',user.create)
    app.delete('/users/delete/:id',user.delete)   
    app.post('/users/update',user.update)
    app.get('/users/username/:username',user.findByUserName) //findbyusername

    //role
    app.post('/role/create',role.create)
}