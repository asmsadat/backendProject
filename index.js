const express = require('express')
const mongoose = require('mongoose')
const cwcWinner=require('./schema')

const app = express()
const port = 3000
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/IccWccWinner')
.then(()=> console.log("Connection Successful"))
.catch((err)=>console.log(`Error: ${err}`))

app.get('/api', async(req, res) => {
    try{
        const winners = await cwcWinner.find({})
        res.status(200).json({winners})
    }
    catch{
        res.status(500).json({message: error.message})
    }
  })

app.get('/api/:id', async(req,res) => {
    try{
        const {id}=req.params
        const winner = await cwcWinner.findById(id)
        res.status(200).json({winner})
    }
    catch{
        res.status(500).json({message: error.message})
    }
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
  })