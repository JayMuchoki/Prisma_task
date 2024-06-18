const express=require("express")
const {PrismaClient}=require('@prisma/client')

const prisma=new PrismaClient()


const getevent=async(req,res) =>{
    const users=await prisma.events.findMany();
    res.json(users)
}

const postevent=async (req,res) =>{
    const newUsers= await prisma.events.create({data:req.body})
    res.json(newUsers)
}

const updateevents=async (req,res) =>{
    const id =req.params.id
    const newlastname=req.body.lastname
    const updatedUsers= await prisma.events.update({where:{id:parseInt(id)},data:{lastname:newlastname}})
    res.json(updatedUsers)
}
const deleteEvents=async (req,res) =>{
    const id =req.params.id
    const deletedUsers= await prisma.events.delete({where:{id:parseInt(id)}})
    res.json(deletedUsers)
}



module.exports={getevent,postevent,updateevents,deleteEvents}