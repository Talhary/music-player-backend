import { verifyToken } from '../utils/jwt.js';
import User from '../models/user.js'
 const isAuthenticated =async (req, res, next) => {
    const token = req?.headers?.['authorization']?.split(' ')?.[1];
      
    if (!token) {
        return res.status(401).json({ msg: 'Unauthorized: No token provided',status:401 });
    }

    const decoded = verifyToken(token);
   
    if (!decoded) {
        return res.status(401).json({ msg: 'Unauthorized: Invalid token' ,status:400});
    }
   const user =  await User.findOne({id:decoded.id})
   if(!user){
    return res.status(400).json({msg:'unable to find you',status:400})
   }
    req.user ={ ...user._json,id:user._json.sub}
    next();
};
export {isAuthenticated}    