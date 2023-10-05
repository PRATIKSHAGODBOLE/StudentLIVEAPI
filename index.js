const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
const noteRouter  = require('./Routes/notesRoutes') //Import Router file
const userRouter = require('./Routes/userRoutes')

const app = express()
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL

// Middleware Excess JSON data.
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


//Database Connection
mongoose
.connect(MONGODB_URL)
.then(()=>console.log("Database Connected"))
.catch(()=>console.log("Error, Not connected"))

//Routing Meddleware
app.use('/api/notes', noteRouter) //remove api/notes from Router folder and mentioned here.
// app.use('/api/users', noteRouter)

app.get('/', (req,res)=>{
    res.json({message: "Start Express Server"})

})



app.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}`)
})