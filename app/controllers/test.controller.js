const Test = require('../models/test.model');

exports.create = (req,res)=>{
    const test = new Test({
        hospital_id: req.body.hospital_id,
        name: req.body.name,
        price: req.body.name,
        image: req.body.image
    });
    test.save((err,data)=>sendResponse(err,data,req,res));
};

exports.getAll = (req,res)=>{
    if(req.query.query) Test.find({ name: req.query.query }, (err,data)=>sendResponse(err,data,req,res));
};

exports.get = (req,res)=>{
    Test.findById(req.params._id, (err,data)=>sendResponse(err,data,req,res));
};

exports.update = (req,res)=>{
    Test.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true }, (err,data)=>sendResponse(err,data,req,res));
};

exports.delete = (req,res)=>{
    Test.findByIdAndDelete(req.params._id, (err,data)=>sendResponse(err,data,req,res));
};

function sendResponse(err,data,req,res) {
    console.log('[SERVER] '+req.method+'\t'+req.url);
    if(err) {
        console.log('[!ERR] '+req.method+' '+req.url+'\t'+err);
        res.status(500).json({ err });
    } else res.status(200).json(data);
}