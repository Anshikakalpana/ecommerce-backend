import jwt, { JwtPayload } from 'jsonwebtoken';

const authMiddleware = (req: any, res: any, next: any) => {
  let token;


  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  
  if (!token && req.cookies?.accesstoken) {
    token = req.cookies.accesstoken;
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token is missing or invalid format',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & { id?: string };
    req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    });
  }
};

export default authMiddleware;



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