import jwt  from 'jsonwebtoken'
const authMiddleware= (req:any, res:any, next:any)=>{
 

    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.send({
            success:false,
            message:"token is missing"
        })
    }
        const token = authHeader.split(' ')[1];
        try {
  const decodedId = jwt.verify(token, process.env.JWT_SECRET!);
  req.user = decodedId;
  next();
} catch (err) {
  return res.status(401).json({ success: false, message: 'Invalid or expired token' });
}


}

const verifyrefreshtoken=(req:any, res:any, next:any)=>{
    const token = req.body.token;
    if(!token) {return res.send({
            success:false,
            message:" Invalid session "
        })}
          try { 
        const decodedId = jwt.verify(token , process.env.JWT_REFRESH_SECRET!)
        req.body.user= decodedId;
        next();}
        catch(err){
            return res.send({
            success:false,
            message:" Invalid session "
        })
        }

}
export {authMiddleware ,verifyrefreshtoken} ;