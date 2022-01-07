mongoose=require('mongoose')
const Schema = mongoose.Schema;
const user = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    isPromoted:{
        type:Boolean,
        default:null
    }
  });
const assignment_4 = mongoose.model("assignment_4", user);
module.exports=assignment_4