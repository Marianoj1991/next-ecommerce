'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-100 to-pink-100'
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-pink-300 to-blue-100'
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-400 to-yellow-200'
  }
]

export default function Slider() {

  const [current, setCurrent] = useState(0)

  // useEffect(() => {

  //   const interval = setInterval(() => {
  //     setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1)
  //   }, 3000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div className='w-max h-full flex transition-all ease-in-out duration-1000' style={{transform: `translateX(-${current * 100}vw)`}}>
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 lg:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center text-center gap-8 transition-all ease-in-out duration-300'>
              <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>
                {slide.description}
              </h2>
              <h1 className='text-5xl lg:text-6xl 2xl:text-8xl'>
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className='rounded-md bg-black text-white py-3 px-4 transition-all ease-in-out duration-300 hover:bg-slate-500'>
                  SHOP ON
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className='h-1/2 lg:w-1/2 lg:h-full relative'>
              <Image
                src={slide.img}
                alt='Slide image'
                fill
                sizes='100%'
                className='object-cover'
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOST */}
      <div className='absolute m-auto left-1/2 bottom-8 flex gap-4' >
        {
          slides.map((slide, index) => (
            <div key={slide.id} onClick={() => setCurrent(index)} className={`w-4 h-4 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? 'scale-150' : ''}`}>
              <div className='w-[8px] h-[8px] bg-gray-600 rounded-full'></div>
            </div>
          ))
        }        
      </div>

    </div> 
  )
}
