const Users= require('../models/users')
const addNewUsers = async(req,res)=>{
  //user alreadyexist or not?
  console.log(req.body)
    await Users.create(req.body)
      res.json({
        msg: 'success'
      })
    }
  module.exports= {addNewUsers}