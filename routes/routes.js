const user = require('../src/controllers/user.controller')

module.exports = function(app){
    app.get('/',function(req,res){
        res.send({message : 'Welcome hereGreen'})
    })
    app.get('/users',user.findAll)
    app.get('/users/:id',user.findById)
    app.post('/users/create',user.create)
    app.delete('/users/:id',user.delete)
}