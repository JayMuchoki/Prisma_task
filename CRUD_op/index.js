const express=require("express")
const {PrismaClient}=require('@prisma/client')
const router=require('./routes/routes')


const app=express()
app.use('/events',router)
app.use(express.json())


const port =process.env.PORT || 3000
app.listen(port,() =>{
    console.log(`server connected to port ${port}`);
})