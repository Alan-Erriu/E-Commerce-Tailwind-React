import { useContext, useState } from "react";
import { cartContext } from "../../../context/cartContext";
import { IconCart } from "../IconCart";


const DetailProduct = ({ objectProduct }) => {
  const { addProduct } = useContext(cartContext);
  const [count, setcount] = useState(0)
  
  const decrement=()=>{
    if (count ===0) return
    setcount(count - 1) 
  }
      
const handleAddToCart=()=>{addProduct({
  img:objectProduct.imagesSmall[0],
  id:objectProduct.id,
  discountPrice:(objectProduct.price * (1 - objectProduct.discount)).toFixed(2),
  title:objectProduct.title,
  quantity:(count ===0 ? 1 :count),
})
setcount(0)
}
  

  return (
    <section className="container mx-auto px-4 md:px-0">
      <p className="mb-3 font-bold uppercase tracking-wide text-orange-500">
        {objectProduct.subTitle}
      </p>

      <h2 className="mb-4 text-3xl font-bold"> {objectProduct.title}</h2>

      <p className="mb-5 text-gray-500">{objectProduct.description}</p>

      <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-1">
        <span className="text-3xl">
          ${(objectProduct.price * (1 - objectProduct.discount)).toFixed(2)}
        </span>
        <span className=" mr-auto rounded-md bg-orange-200 py-1 px-2 text-orange-500">
          {objectProduct.discount * 100}%
        </span>
        <p className="text-right text-lg text-gray-500 line-through md:col-span-2 md:text-left">
          ${objectProduct.price.toFixed(2)}
        </p>
      </div>

      <div className="grid grid-cols-3 font-bold md:mr-2 md:grid-cols-[1fr_1.5fr] md:gap-x-2">
        {/* --------------botonones de agregar-------------- */}
        <div className="col-span-4 mb-4 flex items-center justify-between rounded-md bg-gray-200 py-2 px-5 md:col-span-1 md:h-full">
          <button className=" text-2xl text-orange-500" onClick={decrement}>-</button>
          <span className="text-xl">{count}</span>
          <button className=" text-2xl text-orange-500" onClick={()=>setcount (count +1)}>+</button>
        </div>
        {/* ----------------------boton del carrito---------------- */}
        <button onClick={handleAddToCart}
          className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-500 
       py-2 text-white transition-all hover:bg-orange-700 md:col-span-1 md:h-full"
        >
          <IconCart fill="#fff" />
          <span>add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default DetailProduct;
