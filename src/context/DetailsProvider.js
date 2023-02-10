import { useState } from "react"
import { cartContext } from "./cartContext" 

const DetailsProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
const addProduct =(product)=>{
  if (cartProducts.length ===0){
    return setCartProducts ([...cartProducts,product])
  }
  setCartProducts(
    cartProducts.map(item=>{
      if(item.id === product.id){
        return(
          {...item, quantity: item.quantity + product.quantity}
        )
      }
      else{
       return item 
      }
    })
  )
 }

const delProduct =(id)=>{
  setCartProducts(cartProducts.filter(item=>item.id !==id))
}

const countQunatity = cartProducts.reduce((acc,current)=>current.quantity + acc ,0)

  return (
    <cartContext.Provider value={{cartProducts, addProduct,delProduct,countQunatity}}>
      {children}
    </cartContext.Provider>
  )
}

export default DetailsProvider