import Order from "../models/Order.js";
import Joi from '@hapi/joi'

export const createOrder=async(req,res)=>{
    

    try {
      const schema=Joi.object().keys({
        userId:Joi.string(),
        name:Joi.string().required(),
        phoneNo:Joi.string(),
        address:Joi.string().required(),
        products:Joi.array().required(),
        amount:Joi.number()
      })

      const result =await schema.validateAsync(req.body)
      
      if(result.error) return res.status(400).json(result.error.details[0].message);
      const newOrder = new Order(result)
      const savedOrder = await newOrder.save();
      res.status(200).json([savedOrder]);
    } catch (err) {
      res.status(500).json({message:err.message});
    }
}

export const getSingleOrder=async(req,res)=>{
    try {
        const orders = await Order.find({ id: req.params.userId });
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }  
}