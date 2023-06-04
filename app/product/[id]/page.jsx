'use client'
import products from "@/utils/data/products";
import Image from "next/image";
import { useState } from "react";

function Details(props) {
  const item = getData(props)
  const { imgUrl, productName, price, shortDesc, avgRating } = item[0];
  const [quantity, setQuantity] = useState(1)
  const [pricing, setPricing] = useState(0)
  const changePrice = (price,state) => {
    if(state==='increment'){
    setPricing((oldPrice) => oldPrice + price)
    return
    }
    else if(state==='decrement'){
    setPricing((oldPrice) => oldPrice - price)
    return
    }
  }
  return (
    <>{imgUrl &&
      <div className="flex w-full h-fit py-2 lg:h-90vh md:h-90vh max-[828px]:flex-col max-[828px]:min-h-min justify-around items-center">
        <Image
          src={imgUrl}
          width={300}
          height={120}
          className="h-74 object-contain"
          alt={productName}
        />
        <div className="flex flex-col w-1/2 max-[828px]:w-3/4">
          <h3 className="font-alkatra text-3xl my-3 text-red-600">{productName}</h3>
          <h3 className="font-anton text-xl my-2 text-emerald-400 font-thin">{shortDesc}</h3>
          <div className="flex justify-around my-2">
            <p className="text-xl font-anton">Quantity : {quantity}</p>
            <p className="text-xl font-kanit gap-1 text-sky-500"><span className="text-white">Rating :</span>  {avgRating} &#9733;</p>
          </div>
          <div className="flex justify-center my-3 gap-2 items-center">
            <button className="text-2xl border mx-3 border-solid py-0 px-4 cursor-pointer text-center"
              onClick={
                () => {
                  if(quantity>1){
                  changePrice(price,'decrement')
                  setQuantity((quantity) => quantity - 1)
                  }
                }
              }
            >-</button>
            <p className="text-lg text-orange-500 font-alkatra">{price + pricing} $</p>
            <button className="text-2xl border mx-3 border-solid  px-4 cursor-pointer text-center" onClick={
              () => {
                changePrice(price,'increment')
                setQuantity((quantity) => quantity + 1)
              }
            }>+</button>
          </div>
        </div>
      </div>
    }</>
  )
}

export default Details;
function getData(props) {
  const { params: { id } } = props
  const filterProduct = products.filter((product) => product.id === id)
  return { ...filterProduct }
}