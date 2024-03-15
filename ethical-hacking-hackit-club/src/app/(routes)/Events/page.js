import React from 'react'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/app/_components/Navbar'), { ssr: false })
import Footer from '../../_components/Footer';

const Page = () => {
  return (
    <div className='text-2xl text-center'>
      <Navbar/>
      <Footer/>
      Events</div>
  )
}

export default Page