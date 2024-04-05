import React from 'react'
import NavLogo from '../assets/image/nav-image.png'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
    <img src={NavLogo} alt="NavLogo" className='h-28 w-28 rounded mb-5' />

      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Royal Estate</h1>
      <p className='mb-4 text-slate-700'>Royal Estate is a leading provider of real estate services. Our team of experienced professionals is dedicated to providing exceptional customer service and delivering innovative solutions that meet the needs of our clients.</p>
      <p className='mb-4 text-slate-700'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>Our team of experts has a wealth of experience and knowledge in the real estate industry. We are passionate about helping our clients achieve their goals, and we are dedicated to providing the highest level of service possible.</p>
    </div>
  )
}
