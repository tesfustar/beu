import mongoose from 'mongoose'


const ResturantSchema = new mongoose.Schema({
     name:{type:String,required:true,unique:true},
     img:{type:String},
     address:{type:String},
     foods:[{type:mongoose.SchemaTypes.ObjectId,ref:'Foods'}]
})


const Resturant =mongoose.model('Resturant',ResturantSchema)
export default Resturant