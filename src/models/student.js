const mongoose= require('mongoose')
const validator=require('validator')

const Student=mongoose.model('Student',{
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        lowercase:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            throw new Error('email is invaild')

        },
        required:true
    },
    contact:{
        type:Number
    },
    address:{
        type:String
    },
    rollnumber:{
        type:Number
    },
    std:{
        type:Number
    },
    gender:{
        type:String
    },



   
})
module.exports=Student