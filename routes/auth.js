import express from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
const router =express.Router()
const URL="http://localhost:3000/"



router.get('/login/success',(req,res)=>{
  if(req.user){
   res.status(200).json({
     success:true,
     message:'successful',
     user:req.user,
    //  cookies:req.cookies,
     jwt:jwt.sign({id:req.user.id,},'test', { expiresIn: "2d" })
    })
  }
})


router.get('/login/failed',(req,res)=>{
    res.status(400).json("failed to login")
})


router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

  router.get('/google/callback', passport.authenticate('google',
   { successRedirect:URL,failureRedirect:'/login/failed' }
   
   
   ));

  export default router