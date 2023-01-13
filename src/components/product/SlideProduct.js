import imgproduct0 from "./imagesProducts/image-product-1.jpg"
import imgproduct1 from "./imagesProducts/image-product-2.jpg"
import imgproduct2 from "./imagesProducts/image-product-3.jpg"
import imgproduct3 from "./imagesProducts/image-product-4.jpg"
import img2 from "./imagesProducts/img1.jpg"
import img3 from "./imagesProducts/image-product-2-thumbnail.jpg"
import img4 from "./imagesProducts/image-product-3-thumbnail.jpg"
import img5 from "./imagesProducts/image-product-4-thumbnail.jpg"
import btnPrev from "./imagesProducts/icon-previous.svg"
import btnNext from "./imagesProducts/icon-next.svg"

import { useState } from "react"

const imgArray=[imgproduct0,imgproduct1,imgproduct2,imgproduct3]

const SlideProduct = () => {
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
    <section className='grid md:grid-cols-4 md:gap-6'>
        <div className="col col-span-4 relative">
         <img  src={imgArray[index]} alt="" className="aspect-[16/12]"/>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full justify-between flex px-4" >
         <button className="bg-white rounded-full w-10 h-10 flex justify-center items-center "onClick={handleClickPrev} ><img src={btnPrev} alt="next"></img></button>
          <button className="bg-white rounded-full w-10 h-10 flex justify-center items-center "onClick={handleClickNext}><img src={btnNext} alt="previous"></img></button>
         </div>
        </div>

         <img src={img2} alt="" className="hidden md:block"/>
         <img src={img3} alt=""className="hidden md:block"/>
         <img src={img4} alt=""className="hidden md:block"/>
         <img src={img5} alt=""className="hidden md:block"/> 
        
    </section>
  )
}

export default SlideProduct