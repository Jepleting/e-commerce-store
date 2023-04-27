export default function Product({name,price,picture}){
    return(

        <div className='py-4'>
        <div className='w-64'>
          <img src={picture} alt="" />
        </div>
        <div className='mt-2 shadow-xl h-40 w-64 text-center' >
          <h3 className='font-bold text-lg'>{name}</h3>
          <p>{price}</p>
          <button className='bg-[#C89FA3] hover:bg-[#6C534E] text-white font-bold py-2 px-4 rounded-full'>Add to cart</button>
        </div>
    </div>
    );
}