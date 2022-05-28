import mongoose from 'mongoose'
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    name:{type:String},
    phoneNo:{type: String},
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        productName:{type:String}
      },
    ],
    amount: { type: Number },
    address: { type: String  },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Order=mongoose.model('Order',OrderSchema)

export default Order