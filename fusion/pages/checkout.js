import Layout from "@/components/Layout";
import { useContext, useEffect } from "react";
import {ProductsContext} from "@/components/ProductsContext";
import {useState} from "react";



export default function checkoutPage(){
    const {selectedProducts, setSelectedProducts} = useContext(ProductsContext);
    const [productsInfos,setProductsInfos] = useState ([]);
    useEffect( () => {
        const uniqIds = [...new Set(selectedProducts)];
    fetch('api/products?ids='+uniqIds.join(','))
        .then(response => response.json())
        .then(json => setProductsInfos(json));
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
    

    
    return(
        <Layout>
            {!productsInfos.length && (
                <div>No products in your shopping cart</div>

            )}
            {productsInfos.length && productsInfos.map
            (productInfo => (
                <div className="flex mb-5">
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
        </Layout>
    );
}