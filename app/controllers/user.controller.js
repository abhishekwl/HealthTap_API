const User = require('../models/user.model');

exports.create = (req,res)=>{
    const user = new User({
        _id: req.body._id,
        name: req.body.name,
        age: req.body.age,
        blood: req.body.blood,
        gender: req.body.gender,
        phone: req.body.phone,
        additional: req.body.additional?req.body.additional:''
    });
    user.save((err,data)=>sendResponse(err,data,req,res));
};

exports.get = (req,res)=>{
    User.findById(req.params._id,(err,data)=>sendResponse(err,data,req,res));
};

exports.update = (req,res)=>{
    User.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true }, (err,data)=>sendResponse(err,data,req,res)); 
};

exports.delete = (req,res)=>{
    User.findByIdAndDelete(req.params._id, (err,data)=>sendResponse(err,data,req,res));
};

function sendResponse(err,data,req,res) {
    console.log('[SERVER] '+req.method+'\t'+req.url);
    if(err) {
        console.log('[!ERR] '+req.method+' '+req.url+'\t'+err);
        res.status(500).json({ err });
    } else res.status(200).json(data);
}