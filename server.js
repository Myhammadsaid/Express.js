import dotenv from 'dotenv'
import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import router from './src/routes/router.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
	try {
		const DB = process.env.DB
		await mongoose.connect(DB)
		const PORT = process.env.PORT
		app.listen(PORT, () =>
			console.log(`Сервер запушен на http://localhost:${PORT}`)
		)
	} catch (error) {
		console.log(error)
	}
}

startApp()
