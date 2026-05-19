//create http server..
import exp from 'express'
import cors from 'cors'
import {connect} from 'mongoose'
import {empApp} from './APLs/EmployeeAPI.js'
import { config } from 'dotenv'
config();//process.env.port.env.DB_URL

const app=exp()
const frontendOrigins = (process.env.FRONTEND_URLS || process.env.FRONTEND_URL || 'http://localhost:5173,https://week-6-frontend-one.vercel.app')
	.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean)

app.use(cors({
	origin: frontendOrigins.length === 1 ? frontendOrigins[0] : frontendOrigins
}))
//set a port number
app.use(exp.json())
app.get('/health', (req, res) => {
	res.status(200).json({ status: 'ok' })
})

//connect to db server.
app.use("/emp",empApp)
const port = process.env.PORT || process.env.port || 4000
app.listen(port,()=>console.log(`server listening to port${port}..`))

async function connectDB(){
	try{
		await connect(process.env.DB_URL)
		console.log('connected to db server..')
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

