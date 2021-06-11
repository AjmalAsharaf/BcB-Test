const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const connectDatabase = require('./config/dbConnection')
const authRoutes= require('./routes/auth')
const storeRoutes= require('./routes/store')
const errorMiddleare =  require('./middlewares/error')
const cors = require('cors')

//setting up config file
dotenv.config({path:'./config/config.env'})

//db connection 
connectDatabase()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

//All routes
app.use('/api',authRoutes)
app.use('/api',storeRoutes)

//error midleware
app.use(errorMiddleare)

//server

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
})