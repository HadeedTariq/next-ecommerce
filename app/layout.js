import NavBar from '@/components/NavBar'
import './globals.css'
import { ContextProvider } from './context/store'
import {Alkatra,Kanit} from 'next/font/google'
export const metadata = {
  title: 'Next Commerce',
  description: 'Generated by create next app',
}
const alkatra=Alkatra({
  subsets:['latin'],
  display:"swap",
  variable:"--font-alkatra",
  weight:"400"
})
const anton=Kanit({
  subsets:['latin'],
  display:"swap",
  variable:"--font-anton",
  weight:"300"
})
const kanit=Kanit({
  subsets:['latin'],
  display:"swap",
  variable:"--font-kanit",
  weight:"200"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-white ${alkatra.variable} ${anton.variable} ${kanit.variable}`}>
        <NavBar />
        <div className='relative w-full my-1 h-4/5'>
          <ContextProvider>
            {children}
          </ContextProvider>
        </div>
      </body>
    </html>
  )
}
