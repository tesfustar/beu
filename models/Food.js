import mongoose from 'mongoose'


const FoodShema=new mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    img:{type:String},
    description:{type:String},
    isSpecial:{type:Boolean,default:false}
},{timestamps:true})

const Food=mongoose.model('Foods',FoodShema)

export default Food