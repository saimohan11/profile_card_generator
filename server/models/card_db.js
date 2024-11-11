import mongoose from "mongoose";

const {Schema, model} = mongoose;


const user = new Schema({
    username: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    twitterurl:{
        type:String,
        required:true,
        unique:true
    },                
    instagramurl: {
        type:String,
        required:true,
        unique:true
    },
    intrests: {
        type:Array,
        required:true
    }
});

const User = model('User',user);
export default User;