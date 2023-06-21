import Layout from "@/components/Layout";
import { useContext, useEffect } from "react";
import {ProductsContext} from "@/components/ProductsContext";
import {useState} from "react";



export default function CheckoutPage(){
    const {selectedProducts, setSelectedProducts} = useContext(ProductsContext);
    const [productsInfos,setProductsInfos] = useState ([]);
    const [address,setAddress] = useState ([]);
    const [city,setCity] = useState ([]);
    const [name,setName] = useState ([]);
    const [email,setEmail ] = useState ([]);


    useEffect( () => {
        const uniqIds = [...new Set(selectedProducts)];
    fetch('api/products?ids='+uniqIds.join(','))
        .then(response => response.json())
        .then(json => setProductsInfos(json || []));
    },[selectedProducts]);

    function moreProducts(id){
        setSelectedProducts(prev => [...prev,id])

    }

    function lessProducts(id){
        const pos = selectedProducts.indexOf(id);
        if (pos !== -1){
            setSelectedProducts(prev => {
                return prev.filter((value,index) => index !== pos);

            });

        }

    }
    
    const deliveryPrice = 100;
    let subtotal = 0;
     if (selectedProducts?.length){
        for (let id of selectedProducts){
            const price = productsInfos.find(p => p._id === id) || {};
            subtotal += price.price || 0;
            
        }
     }

    const total = subtotal + deliveryPrice;

    return(
        <Layout>
            {!productsInfos.length && (
                <div>No products in your shopping cart</div>

            )}
            {productsInfos.length && productsInfos.map
            (productInfo => (
                <div className="flex mb-5 key={productInfo._id}">
                    <div className="bg-gray-200 p-3 rounded-xl shrink-0">
                        <img className="w-24" src={productInfo.picture} alt=""/>
                    </div>
                    <div className="pl-4 w-80">
                        <h3 className="font-bold text-lg">{productInfo.name}</h3>
                        <div className="flex"> 
                            <div className="grow">Ksh {productInfo.price}</div>
                            <div>
                                <button onClick={() => lessProducts(productInfo._id)} className="border border-[#C89FA3] px-2 rounded text-[#C89FA3]">-</button>
                                <span className="px-2">
                                {selectedProducts.filter(id => id === productInfo._id).length}

                                </span>
                               
                                <button onClick={() => moreProducts(productInfo._id)} className=" bg-[#C89FA3] px-2 rounded text-white">+</button>

                            </div>
                        </div>
                    </div>

                </div>

            )
            )}
            <div className="mt-4">
                <input value={address} onChange={e => setAddress(e.target.value)} className="bg-gray-200 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Street address, number"></input>
                <input value={city} onChange={e => setCity(e.target.value)} className="bg-gray-200 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="City and postal code"></input>
                <input value={name} onChange={e => setName(e.target.value)} className="bg-gray-200 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Your name"></input>
                <input value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-200 w-full rounded-lg px-4 py-2 mb-2" type="email" placeholder="Email address"></input>
            </div>
            <div className="mt-4">
                <div className="flex my-3">
                    <h3 className="grow font-bold text-gray-500 ">Subtotal:</h3>
                    <h3 className="font-bold">Ksh{subtotal}</h3>
                </div>
                <div className="flex my-3">
                    <h3 className="grow font-bold text-gray-500">Delivery:</h3>
                    <h3 className="font-bold">Ks{deliveryPrice}</h3>
                </div>
                <div className="flex my-3 border-t pt-3 border-[#C89FA3]">
                    <h3 className="grow font-bold text-gray-500">Total:</h3>
                    <h3 className="font-bold">Ksh{total}</h3>
                </div>
            </div>
            <button className="bg-[#6C534E] px-5 py-2 text-white w-full my-4 rounded-full ">Pay Ksh{total}</button>
        </Layout>
    );
}