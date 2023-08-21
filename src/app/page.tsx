import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Products from '@/components/Products'
import Promotions from '@/components/Promotions'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header/>
      <Intro/>
      <Promotions/>
      <Products/>
      <Footer/>
    </>
  )
}
