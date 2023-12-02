import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Router from '@/router'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Navbar/>
      <div style={{height: "calc(100vh - 80px)"}} className='flex relative flex-col items-center justify-center' >
        <Header/>
        <Router/>
      </div>
    </main>
  )
}