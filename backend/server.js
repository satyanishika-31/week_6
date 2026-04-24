//create http server..
import exp from 'express'
import cors from 'cors'
import {connect} from 'mongoose'
import {empApp} from './APLs/EmployeeAPI.js'
import { config } from 'dotenv'
config();//process.env.port.env.DB_URL

const app=exp()
app.use(cors({
	origin:['http://localhost:5173']
}))
//set a port number
app.use(exp.json())

//connect to db server.
app.use("/emp",empApp)
const port = process.env.PORT || process.env.port || 4000
async function connectDB(){
	try{
		await connect(process.env.DB_URL)
		console.log('connected to db server..')
		

		//assign port to http server
app.listen(port,()=>console.log(`server listening to port${port}..`))
	}catch(err){
		console.log('error connecting to db server..',err)
	}
}
connectDB()
//error handling middleware
app.use((err, req, res, next) => {
	console.log(err.name, err.message)

	if (err.name === "ValidationError") {
		return res.status(400).json({ message: "error occured", error: err.message })
	}

	if (err.name === "CastError") {
		return res.status(400).json({ message: "error occured", error: err.message })
	}

	//server error
	res.status(500).json({ message: "error occured", error: "server side error" })
})

