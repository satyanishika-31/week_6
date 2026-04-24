import exp from 'express'
import { EmpModel } from '../models/empmodel.js'



export const empApp=exp.Router()
// create new employee
empApp.post("/emp",async(req,res)=>{
        //get new user obj from req
        const newemp=req.body
       
            //create new user document
        const newempDocument=new  EmpModel(newemp)
        //save
        const result=await newempDocument.save()
        console.log("result",result)
        //saved resous
        res.status(201).json({message:"user created"})//201 success
   
})
//getting all users
empApp.get("/emp" ,async(req,res)=>{
    
    let emplist=await EmpModel.find()
    res.status(200).json({message:"sucess",payload:emplist})
})

// eddit employee details
empApp.put("/emp/:id",async(req,res)=>{
    //get modified user from req
    const modifiedemp=req.body
    const eid= req.params.id
    const updatedemp=await EmpModel.findByIdAndUpdate(eid,{$set:{...modifiedemp}},{new:true,runValidators:true})
    res.status(200).json({message:"employe updater",payload:updatedemp})
})
empApp.delete('/emp/:id',async(req,res)=>{
	//read id from req
	const eid=req.params.id
	//find user by id and delete
	const empObj= await EmpModel.findByIdAndDelete(eid)
	//if user not found
	if(!empObj){
		return res.status(404).json({message:"employee not found"})
	}
	//send res
	res.status(200).json({message:"employee deleted"})
})