import Link from "next/link"

function NavBar() {
  return (
    <>
      <nav className="relative w-100 h-11">
        <div className="w-100 flex justify-between items-center px-5 py-2 bg-sky-600 fixed w-full z-10">
          <h3 className="text-2xl font-semibold cursor-pointer">Next Commerce</h3>
          <ul className="flex list-none gap-5">
            <Link href={'/'} className="decoration-none text-white"><li className="cursor-pointer text-lg font-medium hover:text-amber-200 transition duration-300">Home</li></Link>
            <Link href={'/cart'} className="decoration-none text-white"><li className="cursor-pointer text-lg font-medium hover:text-amber-200 transition duration-300">Cart</li></Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar