import express from 'express'
import ConnectToDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import dotenv from "dotenv";
import cors from 'cors'
dotenv.config();
const app = express()
const PORT= process.env.PORT || 9000
ConnectToDB()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Backend is Running...')
})
// Routes
app.use('/api/auth',authRoutes)
app.listen(PORT,()=>{
    console.log(`Api is Running at ${PORT}`)
})