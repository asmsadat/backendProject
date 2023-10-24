const mongoose=require('mongoose')

const mySchema=mongoose.Schema({
    year:{
        type:Number,
        required:true,
        unique:true
    },
    winner:{
        type:String,
        required:true
    },
    runnerup:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("cwcWinner",mySchema)
