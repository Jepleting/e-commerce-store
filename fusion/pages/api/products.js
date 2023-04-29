import { initMongoose } from "@/lib/mongoose";
import product from "@/models/product";

export async function findAllproducts(){
    return product.find().exec();
}

export default async function handle(req, res) {
    await initMongoose();
    res.json(await findAllproducts());
    // res.status(200).json({
    //     message: "ok"
    // });

}