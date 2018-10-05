const Order = require('../models/order.model');

exports.create = (req,res)=>{
    const order = new Order({
        user_id: req.body.user_id,
        hospital_id: req.body.hospital_id,
        collector_id: req.body.collector_id,
        status: req.body.status,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });
    order.save((err,data)=>sendResponse(err,data,req,res));
};

exports.getAll = (req,res)=>{
    if(req.query.hospital_id && req.query.status) Order.find({ hospital_id: req.query.hospital_id, status: req.query.status }, (err,data)=>sendResponse(err,data,req,res));
    else if(req.query.hospital_id) Order.find({ hospital_id: req.query.hospital_id }, (err,data=>sendResponse(err,data,req,res)));
};

exports.get = (req,res)=>{
    Order.findById(req.params._id, (err,data)=>sendResponse(err,data,req,res));
};

exports.update = (req,res)=>{
    Order.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true }, (err,data)=>sendResponse(err,data,req,res));
};

exports.delete = (req,res)=>{
    Order.findByIdAndDelete(req.params._id, (err,data)=>sendResponse(err,data,req,res));
};

function sendResponse(err,data,req,res) {
    console.log('[SERVER] '+req.method+'\t'+req.url);
    if(err) {
        console.log('[!ERR] '+req.method+' '+req.url+'\t'+err);
        res.status(500).json({ err });
    } else res.status(200).json(data);
}