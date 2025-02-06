import AddProducts from '@/components/AddProducts'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'

export default function SinglePage() {
  return (
    <div className='mt-10 relative flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32'>
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages />
      </div>
      <div className='w-full lg:w-1/2 h-max flex flex-col gap-5'>
        <h2 className='text-5xl font-semibold'>Digital Incense</h2>
        <p className='text-gray-500'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          doloribus placeat iure. Pariatur saepe nostrum ipsum eligendi deleniti
          quidem dolore corrupti, voluptates culpa, enim aperiam ut error!
          Deleniti, laudantium temporibus.
        </p>
        <div className='h-[2px] bg-gray-300' />
        <div className='flex items-center gap-5 text-xl'>
          <span className='text-gray-500 line-through'>$40</span>
          <span className='text-2xl font-semibold'>$40.5</span>
        </div>
        <div className='h-[2px] bg-gray-300' />
        <CustomizeProducts />
        <AddProducts />
        <div className='h-[2px] bg-gray-300' />
        <h3>PRODUCT INFO</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad sunt consequatur animi sapiente officiis debitis in, consectetur laboriosam quam eligendi quo ut quis nulla. Ducimus voluptatem itaque distinctio aspernatur?</p>
        <h3>RETURN & REFUND POLICY</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quis exercitationem tempora temporibus veritatis ab sint qui, blanditiis laborum reprehenderit delectus. Quae esse dolorem reprehenderit, sit asperiores earum aperiam velit!</p>
        <h3>SHIPPING INFO</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit architecto assumenda, magnam ullam laboriosam temporibus reprehenderit quasi ratione? Praesentium voluptatum commodi et incidunt vero perferendis maxime dicta ut saepe.</p>
      </div>
    </div>
  )
}
