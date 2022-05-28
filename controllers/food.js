import Food from "../models/Food.js";


export const createFood=async(req,res)=>{

    const newFood = new Food(req.body)
    try {
        const savedFood =await newFood.save()
        res.status(200).json(savedFood)
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}



export const getFoods=async(req,res)=>{
    const qtype=req.query.foods;
  
    try{
       let foods;
       const sample = new RegExp(qtype,'i')
        if(qtype){
           foods = await Food.find({
            isSpecial:{
                   $in:[sample]
               }
           })
       }
       else{
           foods =await Food.find()
       }
       
        res.status(200).json(foods)
    }catch(err){
        res.status(500).json(err)
    }
}