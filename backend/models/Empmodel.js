import {Schema,model} from 'mongoose'

const Empmodel = new Schema({
	name:{
		type:String,
		required:[true,"first name is required"],
	},
	
	email:{
		type:String,
		required:[true,"email is required"],
		unique:[true,"email already existed"]
	},
	
	designation:{
        type:String,
        required:[true,"email is required"]

    },
	mobile:{
		type:Number,
		required:[true]

	},
	companyName:{
		type:String,
        required:[true]
	},
	
},{timestamps:true,
	versionKey:false,
	strict:"throw"
})
//create model
export const EmpModel=model("emp",Empmodel)