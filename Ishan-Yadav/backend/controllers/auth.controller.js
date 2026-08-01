const {query}=require("../models/connection")
const {hashPassword,comparePassword} = require("../utils/passwords.js")
const {generateToken,setTokenCookie,clearTokenCookie}=require("../utils/jwt")

const signup= async(req,res)=>{
    try{
        const {username,email,password}=req.body
        
        if(!username||!email||!password){
            return res.status(400).json({
                message:"Name,email,password required"
            })
        }
        
        const existingUser = await query(`SELECT * FROM users WHERE email=$1`,[email])
        
        if(existingUser.rows.length>0){
            return res.status(409).json({
                message:"User with this email already exists"
            })
        }

        const hashedPassword = await hashPassword(password)

        const newUser= await query(`INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING *`,[username,email,hashedPassword])

        const user=newUser.rows[0]

        const token= generateToken({userId: user.id,email:user.email})
        setTokenCookie(res,token)
        const {password:_,...userNoPassword}=user
        return res.status(201).json({
            status:"Successful",
            message:"User created",
            user: userNoPassword
        })

    } catch(error){
        console.log(error)
        return res.status(500).json({
            status:"Failed",
            message:"Internal error"
        })
    }
}

const login= async(req,res)=>{
    try{
        const {email,password}=req.body
        
        if(!email||!password){
            return res.status(400).json({
                message:"Email,password required"
            })
        }
        
        const user = await query(`SELECT * FROM users WHERE email=$1`,[email])
        
        if(user.rows.length===0){
            return res.status(401).json({
                message:"Invalid email or password"
            })
        }

        const result=user.rows[0]

        const isPasswordValid=await comparePassword(password,result.password)

        if(!isPasswordValid){
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        const token= generateToken({userId: result.id,email:result.email})
        setTokenCookie(res,token)

        const {password:_,...userWithoutPassword}=result

        return res.status(201).json({
            status:"Successful",
            message:"User logged In",
            data: userWithoutPassword
        })

    } catch(error){
        return res.status(500).json({
            status:"Failed",
            message:"Internal error"
        })
    }
}

const getProfile= async (req,res)=>{
    try{
        const userId=req.user.userId

        const userResult=await query(`SELECT * FROM users WHERE id=$1`,[userId])

        if (userResult.rows.length === 0) {
            return res.status(404).json({
                status: 'fail',
                message: "User not found"
            });
        }
        return res.status(200).json({
            status: 'success',
            user: userResult.rows[0]
        });
    }catch(error){
        return res.status(500).json({
            status:"Failed",
            message:"Internal error"
        })
    }
}

const logout= async(req,res)=>{
    clearTokenCookie(res)

    return res.status(200).json({
        message:"Logout successfully"
    })
}

module.exports={
    signup,login,getProfile,logout
}