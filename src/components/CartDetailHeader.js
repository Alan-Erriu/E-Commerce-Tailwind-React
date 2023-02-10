import { IconDelete } from "./IconDelete";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";

const CartDetailHeader = () => {
  const { cartProducts,delProduct } = useContext(cartContext);

  return (
    <section className="absolute top-[10%] md:top-[125%] left-0  z-10 w-full md:left-full md:max-w-md md:-translate-x-full">
      <div className="mx-2 rounded-md bg-white">
        <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
        <hr />
        {cartProducts.length === 0 && (
          <p className="py-8 text-center">Your cart is empty </p>
        )}
        {cartProducts.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr_] items-center gap-6 p-10 px-6 py-4"
          >
            <img src={product.img} alt="" className="rounded-md" />
            <div>
              <h6>{product.subTitle}</h6>
              <div>
                <p>
                  <span>${product.discountPrice} x {product.quantity}</span>
                  <span className="font-bold">${(product.discountPrice * product.quantity).toFixed(2)}</span>
                </p>
              </div>
            </div>

            <button className="ml-auto" onClick={()=>delProduct(product.id)}>
              <IconDelete className="hover:fill-orange-500" />
            </button>
          </article>
        ))}
        <div className="px-6 pb-6">
          {cartProducts.length !== 0 && (
            <button className="w-full rounded-md bg-orange-500 py-4 text-white hover:bg-orange-700 ">
              checkout
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartDetailHeader;
