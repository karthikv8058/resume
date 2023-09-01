const ProfileModel = require("../models/ProfileModel");

module.exports.getProfile = async (req,res) => {
    const Profile = await ProfileModel.find()
    res.send(Profile);
}

module.exports.saveProfile = async (req,res) => {
    const data = req.body;
    console.log("data :",data);
    ProfileModel.create({...data}).then((data)=>{
        console.log(data);
        console.log("Added successfully");
        res.send(data);
    })
}

module.exports.updateProfile = async (req,res) => {
    const { _id} = req.body;
    const data = req.body;
    console.log("data :",data);
    ProfileModel.findByIdAndUpdate(_id,{...data}).then(()=>{
        res.send("Updated successfully");
    })
    .catch((err)=>console.log(err));
}

module.exports.deleteProfile = async (req,res) => {
    const { _id } = req.body;
    ProfileModel.findByIdAndDelete(_id).then(()=>{
        res.send("Deleted successfully");
    })
    .catch((err)=>console.log(err));
}