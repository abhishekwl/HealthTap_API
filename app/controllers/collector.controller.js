const Collector = require('../models/collector.model');

exports.create = (req,res)=>{
    const collector = new Collector({
        _id: req.body._id,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        image: req.body.image
    });
    collector.save((err,data)=>sendResponse(err,data,req,res));
};

exports.get = (req,res)=>{
    Collector.findById(req.params._id, (err,data)=>sendResponse(err,data,req,res));
};

exports.update = (req,res)=>{
    Collector.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true }, (err,data)=>sendResponse(err,data,req,res));
};

exports.delete = (req,res)=>{
    Collector.findByIdAndDelete(req.params._id, (err,data)=>sendResponse(err,data,req,res));
};

function sendResponse(err,data,req,res) {
    console.log('[SERVER] '+req.method+'\t'+req.url);
    if(err) {
        console.log('[!ERR] '+req.method+' '+req.url+'\t'+err);
        res.status(500).json({ err });
    } else res.status(200).json(data);
}