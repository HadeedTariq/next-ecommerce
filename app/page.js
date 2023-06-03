'use client'
import SideBar from '@/components/SideBar';
import Image from 'next/image'
import { stateHolder, useStore } from './context/store';
import {  useState } from 'react';
import Button from '@/components/Button'
export default function Home() {
  const { state: { products,cart }, dispatch } = useStore()
  const [success, setSuccess] = useState(false)
  const [text, setText] = useState('')
  const [color, setColor] = useState('white')
  const addCart = (product) => {
    if(cart.includes(product)){
      setSuccess(true)
      setText('Already added to cart')
      setColor('sky-blue')
      setTimeout(() => {
        setSuccess(false)
      }, 900);
      return
    }
    dispatch({ type: stateHolder.SET_CART, product })
    setText('Added Successfully')
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 900);
  }
  return (
    <>
    {success &&
      <Button color={color} text={text} success={success} />
    }
      <SideBar />
      <div className="flex justify-center flex-wrap">
        {
          products?.map((product, index) =>
            <div className="m-6 w-72 h-auto flex flex-col items-center shadow-md shadow-purple-500 rounded-md overflow-hidden" key={index}>
              <Image
                src={product.imgUrl}
                width={230}
                height={210}
                alt='img'
                className='bg-transparent h-52 object-fill' />
              <h4 className='text-lg my-1'>{product.productName}</h4>
              <div className='flex justify-between py-3 px-8 w-full text-lg'>
                <p>${product.price}</p>
                <p>{product.avgRating}&#9733;</p>
              </div>
              <button className='border-none rounded py-1 px-3 text-lg text-white bg-sky-400 my-3 cursor-pointer transition duration-300 hover:bg-sky-600' onClick={() => addCart(product)}>Add to cart</button>
            </div>
          )
        }
      </div>
    </>
  )
}
