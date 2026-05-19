import exp from 'express'
import { EmpModel } from '../models/Empmodel.js'



export const empApp=exp.Router()

const normalizeEmployeePayload = (payload) => ({
    name: payload.name,
    email: payload.email,
    designation: payload.designation,
    mobile: payload.mobile,
    companyName: payload.companyName
})

const isEmployeePayloadValid = (payload) => {
    return ['name', 'email', 'designation', 'mobile', 'companyName'].every((key) => {
        return payload[key] !== undefined && payload[key] !== null && String(payload[key]).trim() !== ''
    })
}

// create new employee
empApp.post("/",async(req,res)=>{
        //get new user obj from req
        const newemp=normalizeEmployeePayload(req.body || {})

        if (!isEmployeePayloadValid(newemp)) {
            return res.status(400).json({
                message: 'validation failed',
                error: 'name, email, designation, mobile and companyName are required'
            })
        }
       
            //create new user document
        const newempDocument=new  EmpModel(newemp)
        try {
            const result=await newempDocument.save()
            console.log("result",result)
            res.status(201).json({message:"user created", payload: result})//201 success
        } catch (error) {
            if (error.code === 11000) {
                return res.status(409).json({ message: 'duplicate employee', error: 'email already exists' })
            }

            throw error
        }
   
})
//getting all users
empApp.get("/" ,async(req,res)=>{
    
    try {
        let emplist=await EmpModel.find()
        res.status(200).json({message:"sucess",payload:emplist})
    } catch (error) {
        res.status(500).json({ message: 'failed to fetch employees', error: error.message })
    }
})

// eddit employee details
empApp.put("/:id",async(req,res)=>{
    //get modified user from req
    const modifiedemp=normalizeEmployeePayload(req.body || {})
    const eid= req.params.id
    if (!isEmployeePayloadValid(modifiedemp)) {
        return res.status(400).json({
            message: 'validation failed',
            error: 'name, email, designation, mobile and companyName are required'
        })
    }

    try {
        const updatedemp=await EmpModel.findByIdAndUpdate(eid,{$set:{...modifiedemp}},{new:true,runValidators:true})
        if (!updatedemp) {
            return res.status(404).json({ message: 'employee not found', error: 'No document matches the provided id' })
        }

        res.status(200).json({message:"employe updater",payload:updatedemp})
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'invalid employee id', error: error.message })
        }

        throw error
    }
})
empApp.delete('/:id',async(req,res)=>{
	//read id from req
	const eid=req.params.id
    try {
        //find user by id and delete
        const empObj= await EmpModel.findByIdAndDelete(eid)
        //if user not found
        if(!empObj){
            return res.status(404).json({message:"employee not found"})
        }
        //send res
        res.status(200).json({message:"employee deleted"})
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'invalid employee id', error: error.message })
        }

        res.status(500).json({ message: 'failed to delete employee', error: error.message })
    }
})