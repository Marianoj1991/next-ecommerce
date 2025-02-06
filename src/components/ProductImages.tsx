'use client'

import Image from "next/image"
import { useState } from "react"

const images = [
  {
    id: 0,
    src: 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 1,
    src: 'https://images.pexels.com/photos/3989612/pexels-photo-3989612.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/3497060/pexels-photo-3497060.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
]

export default function ProductImages() {

  const [ index, setIndex ] = useState<number>(0)

  return (
    <div className='flex flex-col gap-6'>
      <div className='relative h-[500px]'>
        <Image
          src={images[index].src}
          alt='Product Image'
          fill
          sizes='50vw'
          className='object-cover rounded-md'
        />
      </div>
      <div className='h-36 relative flex gap-4 overflow-x-scroll scrollbar-hidden'>
        {images.map((img, index) => (
          <div
            className='w-1/4 flex-shrink-0 relative cursor-pointer'
            key={img.id}
            onClick={() => setIndex(index)}
          >
            <Image
              src={img.src}
              alt='Product Image'
              fill
              sizes='25wv'
              className='object-cover rounded-md'
            />
          </div>
        ))}
      </div>
    </div>
  )
}