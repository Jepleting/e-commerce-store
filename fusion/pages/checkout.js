import Layout from "@/components/Layout";
import { useContext, useEffect } from "react";
import {ProductsContext} from "@/components/ProductsContext";
import {useState} from "react";



export default function checkoutPage(){
    const {selectedProducts} = useContext(ProductsContext);
    const [productsInfos,setProductsInfos] = useState ([]);
    useEffect( () => {
        const uniqIds = [...new Set(selectedProducts)];
    fetch('api/products?ids='+uniqIds.join(','))
        .then(response => response.json())
        .then(json => setProductsInfos(json));
    },[selectedProducts]);

    
    return(
        <Layout>
            {!productsInfos.length && (
                <div>No products in your shopping cart</div>

            )}
            {productsInfos.length && productsInfos.map
            (productInfo => (
                <div>
                    {productInfo.name}

                </div>

            )
            )}
        </Layout>
    );
}