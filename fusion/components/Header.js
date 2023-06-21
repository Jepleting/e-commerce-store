import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo.jpg';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';





 
 export default function Header(){
    const router = useRouter();
    const path = router.pathname;
    const {selectedProducts} = useContext(ProductsContext);   
    return(
        <header className="m-5 justify-between  h-18 bg-gray-200">
           {/* <Image
            src={logo}
            alt="Picture of logo"
            width="192px"
            height="192px"
            /> */}
            {/* <div className='w-100'>
                <img src={logo} alt="Picture of logo" />
            </div> */}
            
            
            <nav className="flex justify-end space-x-10 text-gray-500"> 
            <Link href={'/'}>
                    <div className={(path === '/' ? 'text-[#C89FA3]' : '')+" flex justify-center items-center flex-col"} >
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                    </svg>
                    </div>
                
                <span>Home</span>
                </Link>
                <Link href={'/checkout'}>
                    <div className={(path === '/checkout' ? 'text-[#C89FA3]' : '')+" flex justify-center items-center flex-col"} >

                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                    </svg>
                    </div>
                <span>Cart {selectedProducts.length}</span>
                </Link>

            </nav>

            
                

        </header>
    );
 }