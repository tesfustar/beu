import jwt,{decode} from 'jsonwebtoken'

const auth=(req,res,next)=>{
    const authHeader = req.headers['authorization'];
   try {
       if(authHeader){
        const token = authHeader.split(" ")[1]
        const isCustomToken =token.length < 170

        let decodeData
        if(token && isCustomToken){
            decodeData=jwt.verify(token,process.env.JWT_KEY)
            req.userId=decodeData?.id
        }else{
            decodeData=jwt.decode(token)
            req.userId= decodeData?.id || decodeData?.sub
        }
        next()
       }else{
        return res.status(401).json({message:"You are not authenticated!"});
       }
       
   } catch (error) {
       console.log({message:error.message})
   }
}


export default auth