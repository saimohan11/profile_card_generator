import express from 'express';
import User from "../models/card_db.js";
import bodyParser from "body-parser";
import cors from 'cors';
const app = express()

app.use(express.json());
app.use(cors());

export const cardDetails = async(req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const twitterurl = req.body.twitterurl;
    const instagramurl = req.body.instagramurl;
    const intrests = req.body.intrests;
    try {
        const data = await User.create({
            username:username,
            description:description,
            twitterurl:twitterurl,
            instagramurl:instagramurl,
            intrests:intrests
        })
    
        res.status(201).json({
            data,
            message:"user-profile created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            message:"user-profile creation failed",
            error: error.message
        })
    }

};

export const getProfiles = async(req,res)=>{
    try {
        const profiles = await User.find({});
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching profiles",
            error: error.message
        });
    }
};

export const getOneProfileData = async(req,res)=>{
    const profileid = req.params.id;
    try {
        const profile = await User.findOne({_id:profileid});
        console.log("Fetched profile:", profile);
        if(!profile) {
            return res.status(404).json({message: "profile not found"}
            )
        } else {
            res.status(200).json({
                message: "profile data fetched successfully",
                data: profile
                });
        }
    }
    catch(error) {
        res.status(500).json({
            message: "Error fetching profile data",
            error: error.message
        })
    }
};

export const deleteProfile = async(req,res)=>{
    const profileid = req.params.id;
    try {
        const profile = await User.findOneAndDelete({_id:profileid});
        if(!profile) {
            res.status(400).json({
                message: "profile not found"
            })
        } else {
            res.status(200).json({
                message: "profile deleted successfully",
                data: profile
            })
        }
    } catch(error) {
        res.status(500).json({
            message: "Error deleting profile",
            error: error.message
            })
    }
}