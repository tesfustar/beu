import Resturant from "../models/Resturants.js";


export const createResturant=async(req,res)=>{
    const newResturant = new Resturant(req.body)
    try {
        const savedResturant =await newResturant.save()
        res.status(200).json(savedResturant)
    } catch (error) {
        res.status(500).json({message:error.message})
    }


}

export const getResturant=async(req,res)=>{
    try {
       const resturants =await Resturant.find().populate('foods')
        res.status(200).json(resturants)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getOneResturant=async(req,res)=>{
    const {id} = req.params
    try {
        const resturant = await Resturant.findById(id).populate("foods")
        res.status(200).json(resturant)
    } catch (error) {
        res.status(500).json({message:error.message}) 
    }
}