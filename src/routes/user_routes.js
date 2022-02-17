const express = require('express');
const userSchema = require('../models/user.js');
const route = express.Router();

//Crear la ruta para la creación de usuarios
route.post('/user',(req, res)=>{
	const user = userSchema(req.body)
	user
		.save()
		.then((data)=>res.json(data))
		.catch((error)=>res.json({message: error}))
})

//Consultar todos los usuarios
route.get('/user', (req,res)=>{
	find()
		.then((data)=>res.json(data))
		.catch((error)=>res.json({message: error}))
})

//Mostras info de usuario específico
route.get('/users/:id', (req, res)=>{
	const {id} = req.params
	userSchema
		.findById(id)
		.then((data)=>res.json(data))
		.catch((error)=>res.json({message: error}))

})

//Eliminar un usuario específico
route.delete('/users/:id', (req,res)=>{
	const {id} = req.params
	userSchema
		.updateOne({_id: id})
		.then((data)=>res.json(data))
		.catch((error)=>res.json({message: error}))

})

//Editar un recurso específico 
//route.put('/users')

module.exports = route