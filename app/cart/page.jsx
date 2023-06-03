'use client';
import Image from "next/image"
import { stateHolder, useStore } from "../context/store";
import { useState } from "react";
import Button from "@/components/Button";
import {useRouter} from 'next/navigation'
function Cart() {
  const router=useRouter()
  const { state: { cart }, dispatch } = useStore()
  const [success, setSuccess] = useState(false)
  const [text, setText] = useState('')
  const [color, setColor] = useState('red')
  const removeCart = (product) => {
    dispatch({ type: stateHolder.REMOVE_CART, product })
    setSuccess(true)
    setText('Remove from the cart')
    setTimeout(() => {
      setSuccess(false)
    }, 900);
  }
  return (
    <>
      {
        success &&
        <Button color={color} text={text} />
      }
      <div className="flex justify-center flex-wrap">
        {cart &&
          cart.map((product, index) =>
            <div className="m-6 w-72 h-auto flex flex-col items-center shadow-md shadow-purple-500 rounded-md overflow-hidden" key={index}>
              <Image
                src={product.imgUrl}
                width={230}
                height={210}
                alt='img'
                className='bg-transparent h-52 object-fill' />
              <h4 className='text-lg my-1'>{product.productName}</h4>
              <div className='flex  justify-between py-3 px-8 w-full text-lg'>
                <p>${product.price}</p>
                <p>{product.avgRating}&#9733;</p>
              </div>
              <button className='border-none rounded py-1 px-3 text-lg text-white bg-red-700 my-3 cursor-pointer transition duration-300 hover:bg-red-800' onClick={() => removeCart(product)}>Remove from cart</button>
              <button className="border-none rounded py-1 px-3 text-lg text-white bg-emerald-700 my-3 cursor-pointer transition duration-300 hover:bg-emerald-800" onClick={()=>router.push(`/product/${product.id}`)}>See Details</button>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Cart