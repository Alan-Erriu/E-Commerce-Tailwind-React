import DetailProduct from "./col-detail/DetailProduct";
import MainImages from "./Col-Image/MainImages";

import imgproduct0 from "./Col-Image/imagesProducts/image-product-1.jpg";
import imgproduct1 from "./Col-Image/imagesProducts/image-product-2.jpg";
import imgproduct2 from "./Col-Image/imagesProducts/image-product-3.jpg";
import imgproduct3 from "./Col-Image/imagesProducts/image-product-4.jpg";
import img2 from "./Col-Image/imagesProducts/img1.jpg";
import img3 from "./Col-Image/imagesProducts/image-product-2-thumbnail.jpg";
import img4 from "./Col-Image/imagesProducts/image-product-3-thumbnail.jpg";
import img5 from "./Col-Image/imagesProducts/image-product-4-thumbnail.jpg";

const imgArray = [imgproduct0, imgproduct1, imgproduct2, imgproduct3];
const imgArraySmall = [img2, img3, img4, img5];

const objectProduct = {
  id: 1,
  title: "Fall limited edition sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstand everything the weather can offer.",
  subTitle: "SNEAKERS COMPANY",
  price: 250,
  discount: 0.5,
  imagesMain: imgArray,
  imagesSmall: imgArraySmall,
};

const MainProduct = () => {
  return (
    <main
      className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2
   2xl:container 2xl:mx-auto 2xl:min-h-[calc(100vh-88px-3px)] "
    >
      <MainImages
        imgArray={objectProduct.imagesMain}
        imgArraySmall={objectProduct.imagesSmall}
      />
      <DetailProduct objectProduct={objectProduct} />
    </main>
  );
};

export default MainProduct;
