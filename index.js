import express from 'express'
import mongoose from'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import user from './routes/user.js'
import food from './routes/food.js'
import resturant from './routes/resturant.js'
import order from './routes/order.js'


dotenv.config();
const app = express()




mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('db connection successfllul'))
.then((err)=>{console.log(err)})
app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }))
app.use('/api/order',order)
app.use('/api/user',user)
app.use('/api/food',food)
app.use('/api/resturant',resturant)

app.get('/',(req,res)=>{
    res.send("successful")
})

const PORT=process.env.port || 5000 
app.listen(PORT,()=>console.log(`server is ruunning on port ${PORT}`))