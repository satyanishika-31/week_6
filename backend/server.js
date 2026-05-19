//create http server..
import exp from 'express'
import cors from 'cors'
import mongoose, {connect} from 'mongoose'
import {empApp} from './APLs/EmployeeAPI.js'
import { config } from 'dotenv'
config();//process.env.port.env.DB_URL

const app=exp()
const allowedOrigins = (process.env.FRONTEND_URLS || process.env.FRONTEND_URL || 'https://week-6-frontend-git-main-satyanishika-31s-projects.vercel.app,http://localhost:5173')
	.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean)

app.use(cors({
	origin: (origin, callback) => {
		if (!origin) {
			return callback(null, true)
		}

		if (allowedOrigins.includes(origin)) {
			return callback(null, true)
		}

		return callback(null, false)
	},
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization']
}))
//set a port number
app.use(exp.json())
app.get('/health', (req, res) => {
	res.status(200).json({
		status: 'ok',
		database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
	})
})

//connect to db server.
app.use('/api/employees', (req, res, next) => {
	if (mongoose.connection.readyState !== 1) {
		return res.status(503).json({ message: 'database unavailable', error: 'MongoDB connection is not ready' })
	}

	next()
})
app.use('/api/employees', empApp)
const port = process.env.PORT || process.env.port || 4000
app.listen(port,()=>console.log(`server listening to port${port}..`))

async function connectDB(){
	try{
		if (!process.env.DB_URL) {
			throw new Error('DB_URL is not set')
		}

		await connect(process.env.DB_URL, {
			serverSelectionTimeoutMS: 10000
		})
		console.log('connected to db server..')
	}catch(err){
		console.log('error connecting to db server..',err)
	}
}
connectDB()
// json 404 for unknown API routes
app.use((req, res) => {
	res.status(404).json({ message: 'route not found', error: 'Not Found' })
})
//error handling middleware
app.use((err, req, res, next) => {
	console.log(err.name, err.message)

	if (err.type === 'entity.parse.failed') {
		return res.status(400).json({ message: 'invalid json body', error: err.message })
	}

	if (err.name === "ValidationError") {
		return res.status(400).json({ message: "error occured", error: err.message })
	}

	if (err.name === "CastError") {
		return res.status(400).json({ message: "error occured", error: err.message })
	}

	//server error
	res.status(500).json({ message: "error occured", error: "server side error" })
})

