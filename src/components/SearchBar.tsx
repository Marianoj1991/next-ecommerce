'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    if(name) {
      router.push(`/list?name=${name}`)
    }
  }

  return (
    <form
      className='flex items-center justify-center flex-1 bg-gray-200 p-2 rounded-md'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='name'
        placeholder='Search...'
        className='flex-1 bg-transparent outline-none'
      />
      <button className='cursor-pointer' onClick={() => handleSubmit}>
        <Image
          src='/search.png'
          alt='search-bar-logo'
          width={16}
          height={16}
        />
      </button>
    </form>
  )
}
