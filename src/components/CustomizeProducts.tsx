export default function CustomizeProducts() {
  return (
    <div className='flex flex-col gap-6'>
      <h4 className='font-medium'>Choose a color</h4>
      <ul className='flex items-center gap-5'>
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>
          <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2' />
        </li>
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500'></li>
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500'>
          <div className='absolute w-10 h-[3px] bg-red-500 rotate-45 top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2' />
        </li>
      </ul>
      <h4 className='font-medium'>Choose a size</h4>
      <div className='flex items-center gap-4'>
        <div className='bg-rosa-chicle px-4 py-2 rounded-md text-white opacity-35 cursor-not-allowed'>
          Large
        </div>
        <div className='px-4 py-2 ring-rosa-chicle ring-2 rounded-md text-rosa-chicle cursor-pointer'>Medium</div>
        <div className='px-4 py-2 bg-rosa-chicle text-white rounded-md cursor-pointer'>Small</div>
      </div>
    </div>
  )
}
