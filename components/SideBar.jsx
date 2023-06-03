'use client'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'
import { useStore } from "@/app/context/store"
import { stateHolder } from "@/app/context/store"
import { filterdCategory } from "@/utils/data/filteredCategory"
import products from '@/utils/data/products'
function SideBar() {
  const { state: { menu }, dispatch } = useStore()
  const changeDisplay = () => {
    dispatch({ type: stateHolder.SET_MENU, menu: !menu })
  }
  const changeCategory=(cat)=>{
    if(cat.toLowerCase()==='all'){
      dispatch({type:stateHolder.SET_ALL,products:products})
      return
    }
    dispatch({type:stateHolder.SET_CATEGORY,category:cat.toLowerCase()})
  }
  return (
    <>
          <div className="fixed right-1 my-1 mx-2 z-10 cursor-pointer transition duration-300" onClick={changeDisplay}>
            {!menu ?
              <GiHamburgerMenu size={24} className="text-orange-600" />
              :
              <GiCancel size={24} className="text-red-600" />
            }
          </div>
          <div className={`flex flex-col items-center w-100 bg-slate-800 mb-3 fixed w-full transition duration-500 ${menu ? 'translate-y-0' : '-translate-y-72'}`}>
            {
              filterdCategory?.map((cat, index) =>
                <p key={index} className="capitalize text-xl text-sky-400 my-2 cursor-pointer hover:text-teal-200 transition duration-150" onClick={()=>changeCategory(cat)}>{cat}</p>
              )
            }
          </div>
    </>
  )
}

export default SideBar