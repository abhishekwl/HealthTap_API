const Hospital = require('../models/hospital.model');

exports.create = (req,res)=>{
    const hospital = new Hospital({
        _id: req.body._id,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        city: req.body.city,
        image: req.body.image
    });
    hospital.save((err,data)=>sendResponse(err,data,req,res));
};

exports.getAll = (req,res)=>{
    if(req.query.query) Hospital.find({ name: req.query.query }, (err,data)=>sendResponse(err,data,req,res));
};

exports.get = (req,res)=>{
    Hospital.findById(req.params._id, (err,data)=>sendResponse(err,data,req,res));
};

exports.update = (req,res)=>{
    Hospital.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true }, (err,data)=>sendResponse(err,data,req,res));
};

exports.delete = (req,res)=>{
    Hospital.findByIdAndDelete(req.params._id, (err,data)=>sendResponse(err,data,req,res));
};

function sendResponse(err,data,req,res) {
    console.log('[SERVER] '+req.method+'\t'+req.url);
    if(err) {
        console.log('[!ERR] '+req.method+' '+req.url+'\t'+err);
        res.status(500).json({ err });
    } else res.status(200).json(data);
}