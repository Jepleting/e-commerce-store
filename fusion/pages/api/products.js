import { initMongoose } from "@/lib/mongoose";
import product from "@/models/product";


export default async function handle(req, res) {
    await initMongoose();
    res.json(await product.find().exec());
    // res.status(200).json({
    //     message: "ok"
    // });

}