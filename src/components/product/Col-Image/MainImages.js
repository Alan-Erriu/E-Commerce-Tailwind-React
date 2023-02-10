import { useState } from "react"
import SlideProduct from "./SlideProduct"




const MainImages = ({imgArray,imgArraySmall}) => {

  const [isOpenModal, setisOpenModal] = useState(false)
  const handleOpenModal=()=>{
    setisOpenModal(true)
  }
  const handleCloseModal=()=>{
    setisOpenModal(false)
  }
  return(
    
    <>
    <SlideProduct
    handleOpenModal={handleOpenModal}
    className='grid md:grid-cols-4 md:gap-6'
     imgArray={imgArray} imgArraySmall={imgArraySmall}/>
     
    
    {
      isOpenModal && ( <><SlideProduct //es el mismo componente del slide, pero en modal
      className='z-10 hidden md:grid md:grid-cols-4 md:gap-6 md:absolute md:top-1/2 md:max-w-xl md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2'
       imgArray={imgArray} imgArraySmall={imgArraySmall}
       isOpenModal={isOpenModal}
       handleCloseModal={handleCloseModal}/>
       <span className="md:fixed top-0 left-0 h-full w-full bg-black/70"></span>
      </>
    )}
    
   
   </>
  )
}

export default MainImages

