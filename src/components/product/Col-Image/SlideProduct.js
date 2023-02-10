import btnPrev from "./imagesProducts/icon-previous.svg"
import btnNext from "./imagesProducts/icon-next.svg"

import { useEffect, useRef, useState } from "react"



const SlideProduct = ({imgArray,imgArraySmall,isOpenModal=false,handleCloseModal=null,handleOpenModal=()=>{}, ...props }) => {

  const btnSlider = useRef(null)
  useEffect(() => {
     
    if (isOpenModal){
  
      (btnSlider.current.classList.remove("md:hidden"))
}
  }, [isOpenModal])
  
  const [index, setindex] = useState(0)
  const handleClickNext=()=>{
    if (index === imgArray.length -1) return setindex(0)
    setindex(index + 1)
  }
  const handleClickPrev=()=>{
    if (index === 0) return imgArray.length -1
    setindex(index - 1)
  }


  return (
   
    
    <section  {...props}>
      {isOpenModal && <button onClick={handleCloseModal} className="md:col-span-4 text-right">X</button>}
        <div className="col col-span-4 relative ">
         <img 
         onClick={handleOpenModal}
         src={imgArray[index]} alt="" className="md:cursor-pointer aspect-[16/13] md:aspect-[16-18] xl:aspect-[16-14] 2xl:max-h-[500px] object-cover w-full
           md:rounded-md"/>

          <div ref={btnSlider} className="absolute top-1/2 left-0 -translate-y-1/2 w-full justify-between flex px-4 md:hidden " >
         <button className="bg-white rounded-full w-10 h-10 flex justify-center items-center "onClick={handleClickPrev} ><img src={btnPrev} alt="next"></img></button>
          <button className="bg-white rounded-full w-10 h-10 flex justify-center items-center "onClick={handleClickNext}><img src={btnNext} alt="previous"></img></button>
         </div>
        </div>
        {
            imgArraySmall.map((item,i) => (
            <div 
            onClick={()=>{setindex(i)}}
            key={item}
            className="relative overflow-hidden rounded-md cursor-pointer ">
            <img 
              src={item} 
              alt="" 
              className="hidden md:block md:rounded-md "/>

            <span className={`top-0 h-full w-full absolute hover:bg-[rgba(255,255,255,0.5)]
            ${
              i === index && "bg-[rgba(255,255,255,0.5)]"
            
            }`}></span>
          </div>
                ))}
     
        
        
    </section>
  )
}

export default SlideProduct