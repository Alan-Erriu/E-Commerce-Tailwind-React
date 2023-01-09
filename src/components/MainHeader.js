import logoSneakers from  "../images/logo.svg"
import avatar from  "../images/image-avatar.png"
import menuIcon from "../images/iconMenu.svg"
import cartIcon from "../images/icon-cart.svg"
import closeIcon from "../images/icon-close.svg"
import { useState } from "react"


const MainHeader = () => {
  const [navClass, setNavClass ] = useState("")
  const hadleOpenMenu =() =>{
     setNavClass("absolute top-0 font-bold w-4/5 left-0 h-full gap-y-5 bg-slate-400 flex flex-col md:block md:mr-auto md:flex md:gap-4 md:flex-row pl-5 md:static md:p-o")
    }
  const hadleCloseMenu =() =>{
     setNavClass ("hidden absolute top-0 font-bold  left-0  bg-slate-400  md:block md:mr-auto md:flex md:gap-4 md:flex-row pl-5 md:static md:p-0")
  }
  return (
    <header className="container flex mx-auto px-4 items-center gap-4">
        <button onClick={hadleOpenMenu} className="md:hidden"><img src={menuIcon} alt="menu"/></button>
        
    <img src={logoSneakers} alt="sneakers" className="mr-auto mb-1 h-5 md:mr-0"/>
    
    <nav className={navClass}>
      <button onClick={hadleCloseMenu} className="p-5 md:hidden"  ><img src={closeIcon} alt="close"/></button>
      <a href="#" >Collection</a>
      <a href="#" >Men</a>
      <a href="#" >Women</a>
      <a href="#" >About</a>
      <a href="#" >Contac</a>
    </nav>
    <div className="flex gap-4">
      
      <button><img src={cartIcon} alt="cart"/></button>
      <img src={avatar} alt="avatar" className="w-10"></img>
    </div>
  </header>
  )
}

export default MainHeader