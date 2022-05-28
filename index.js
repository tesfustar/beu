import express from 'express'
import mongoose from'mongoose'
import cors from 'cors'
import cookieSession from 'cookie-session'
import passport from'passport'
import dotenv from 'dotenv'
import pass from './controllers/pass.js'
import user from './routes/user.js'
import food from './routes/food.js'
import resturant from './routes/resturant.js'
import order from './routes/order.js'
dotenv.config();
const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000',credentials:true,methods:"GET,POST,PUT,DELETE,HEAD",optionSuccessStatus:200}))
app.use(cookieSession({name:'session',keys:['abdi'],maxAge:24*60*60*100}))
app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('db connection successfllul'))
.then((err)=>{console.log(err)})

app.use('/api/order',order)
app.use('/api/user',user)
app.use('/api/food',food)
app.use('/api/resturant',resturant)
app.get('/api/',(req,res)=>{
    res.send("hello stackoverflow")
})

const PORT=process.env.port || 5000 
app.listen(PORT,()=>console.log(`server is ruunning on port ${PORT}`))