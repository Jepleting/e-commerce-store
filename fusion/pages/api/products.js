import { initMongoose } from "@/lib/mongoose";
import product from "@/models/product";

export async function findAllproducts(){
    return product.find().exec();
}

export default async function handle(req, res) {
    await initMongoose();
    const {ids} = req.query;
    if (ids){
        const idsArray = ids.split(",");
        // console.log(idsArray);
        res.json(await product.find({'_id':{$in:idsArray}}).exec());

    }else{
        res.json(await findAllproducts());
    }
  
   
   
   
   
   
   
   
      // res.status(200).json({
    //     message: "ok"
    // });

}