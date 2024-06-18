const express=require("express")
const {PrismaClient}=require('@prisma/client')
const router=express.Router()
const {getevent,postevent,updateevents,deleteEvents}=require("../controllers/controls")

const prisma=new PrismaClient()
router.use(express.json())


router.get("/",getevent)
router.post("/",postevent)
router.put("/:id",updateevents)
router.delete("/:id",deleteEvents)

module.exports=router



