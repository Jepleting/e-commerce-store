import Layout from "@/components/Layout";
import { useContext, useEffect } from "react";
import {ProductsContext} from "@/components/ProductsContext";
import {useState} from "react";



export default function checkoutPage(){
    const {selectedProducts} = useContext(ProductsContext);
    const [productsInfo,setProductsInfo] = useState ([]);
    useEffect( () => {
        const uniqIds = [...new Set(selectedProducts)];
        fetch ('api/products?ids='+uniqIds.join(','))
        .then(response => response.json())
        .then(json => setProductsInfo(json));
    },[selectedProducts]);

    
    return(
        <Layout>
            {selectedProducts.join(',')}
        </Layout>
    );
}