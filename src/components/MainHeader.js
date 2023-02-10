import logoSneakers from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import menuIcon from "../images/iconMenu.svg";
import cartIcon from "../images/icon-cart.svg";
import closeIcon from "../images/icon-close.svg";
import { useContext, useState } from "react";
import { LinkNavHeader } from "./LinkNavHeader";
import { cartContext } from "../context/cartContext";

import CartDetailHeader from "./CartDetailHeader";

const MainHeader = () => {
const {countQunatity} = useContext(cartContext)  
const [openMenuCart, setopenMenuCart] = useState(false)

  const [navClass, setNavClass] = useState(
    " hidden  font-bold w-4/5  gap-y-5  flex md:block  md:flex md:gap-4 md:flex-row  md:static  "
  );
  const hadleOpenMenu = () => {
    setNavClass(
      " bg-white absolute top-0 font-bold w-4/5 left-0 h-full gap-y-5  flex flex-col md:block md:mr-auto md:flex md:gap-4 md:flex-row pl-5 md:static md:p-o z-10"
    );
  };
  const hadleCloseMenu = () => {
    setNavClass(
      "hidden absolute top-0 font-bold  left-0   md:block md:mr-auto md:flex md:gap-4 md:flex-row pl-5 md:static md:p-0"
    );
  };
  return (
    <>
      <header className="container md:relative mx-auto flex  items-center gap-4 p-4 md:p-0">
        <button onClick={hadleOpenMenu} className="md:hidden">
          <img src={menuIcon} alt="menu" />
        </button>

        <img
          src={logoSneakers}
          alt="sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />

        <nav className={navClass}>
          <button onClick={hadleCloseMenu} className="p-5 md:hidden">
            <img src={closeIcon} alt="close" />
          </button>
          <LinkNavHeader text={"Collection"} />
          <LinkNavHeader text={"Men"} />
          <LinkNavHeader text={"Women"} />
          <LinkNavHeader text={"About"} />
          <LinkNavHeader text={"Contact"} />
        </nav>
        <div className="flex gap-4">
          <button className="w-10 relative">
            <img src={cartIcon} alt="cart" onClick={()=>setopenMenuCart(!openMenuCart)} />
          <span className="bg-orange-500 px-1 text-xs rounded-full absolute translate-x-1 top-0 right-0">{countQunatity}</span>
          </button>
          <img src={avatar} alt="avatar" className="w-10"></img>
          {openMenuCart && <CartDetailHeader />}
        </div>
      </header>
      <span className="container mx-auto h-[1px]  bg-slate-400 md:block "></span>
    </>
  );
};

export default MainHeader;
