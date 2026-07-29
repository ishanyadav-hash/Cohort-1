const express= require('express')

const app = express();

require('dotenv').config()

const {initDatabase}= require('./controllers/initDb')

const db=require('./models/connection')

initDatabase();

app.use(express.urlencoded({extended: false}))
app.use(express.json());

PORT = process.env.PORT

app.get("/",(req, res)=>{
    res.status(200).json({
        status: "Success",
        message: "Welcome to home page"
    })
    // res.send("Hello");
})

app.get('/users', async(req,res)=>{
    const getUsersQuery = `
    SELECT * FROM users; 
    `
    try{
        const result= await db.query(getUsersQuery);
        res.status(200).json({
            status: "Success",
            message: "All users fetched",
            data: result.rows
        })

    } catch(error){
        return res.send(500).json({
            status: "Failed",
            message: "Something went wrong",
            error: error
        })
    }
})

app.post('/users', async(req, res)=>{

    const {username,email,password} = req.body
    try{
    const createUserQuery = `
    INSERT INTO users (username,email,password)
    values ($1,$2,$3)
    RETURNING id , username, email, password;
    `
    const result = await db.query(createUserQuery, [username,email,password])

    res.status(201).json({
        status: "Success",
        message: "Created",
        data: result.rows[0]
    })
    } catch(error){
        console.log(error)
    }
    // res.json({
    //     Username: username,
    //     Useremail: email,
    //     Userpaswd: password
    // })
})

app.delete('/del', async (req, res) => {
    
    const {email} = req.body

    try{
        const delUserQuery = `
        DELETE FROM users 
        where email=$1
        `
        const result = await db.query(delUserQuery, [email])
        res.status(204).json({
        status: "Success",
        message: "Deleted"
    })
    } catch(error){
        console.log(error)
    }
})

app.post('/findUsers', async(req,res)=>{
    
    const {email,password} = req.body;

    try{
        const findUserQuery= `
        SELECT * FROM users
        WHERE email=$1 and password = $2;
        `
        const result = await db.query(findUserQuery, [email,password])

        res.status(200).json({
        status: "Success",
        message: "User found",
        data: result.rows[0]
        })
    } catch(error){
        console.log(error)
    }
})

app.listen(PORT,(err)=>{
    if(err) console.log(err)
        
        console.log(`Successfully connected to this port :${PORT}`)
});
