function Button(props) {
    const {color,text}=props
  return (
     <>
     <div className='fixed flex w-full justify-center my-1 cursor-pointer'>
       <p className={` border-emerald-500 border-2 py-1 px-5 rounded-sm bg-stone-900 `} style={{color}} >{text}</p>
       </div>
     </>
  )
}

export default Button