const user=require('../model/table.js');
exports.postDetails=async(req,res,next)=>{
    try{
        const{name,price}=req.body;
   const data=await user.create({
        name:name,
        price:price,
        
    });
    res.status(201).json(data);
    }
    catch(err){
        console.log(err);
    }
    }
exports.getDetails=async(req,res,next)=>{
    try{
     const data=await user.findAll();
     res.status(200).json(data)
    }
catch(err){
    console.log(err);
}
}
exports.deleteDetail=async(req,res,next)=>{
    const uid=req.params.id;
    await user.destroy({
        where:{
         id:uid
        }
    });
    res.sendStatus(200);

}