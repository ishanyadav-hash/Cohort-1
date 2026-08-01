const jwt=require("jsonwebtoken")

const generateToken = (payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn: '1d'
    })
}

const setTokenCookie=(res,token)=>{
    res.cookie('token',token,{
        httpOnly: true,
        sameSite:'Strict',
        maxAge: 24*60*60*1000
    })
}

const clearTokenCookie= (res)=>{
    res.cookie('token','',{
        httpOnly: true,
        expires: new Date(0)
    })
}

module.exports={
    generateToken,setTokenCookie,clearTokenCookie
}
