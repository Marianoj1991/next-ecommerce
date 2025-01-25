import Image from 'next/image'

export default function CartModal() {
  const isCartEmpty = false

  return (
    <div className='w-max absolute top-10 right-0 shadow-[0px_10px_10px_rgb(0,0,0,0.2)] z-50 p-4 rounded-md bg-white'>
      {isCartEmpty ? (
        <div>Cart is empty</div>
      ) : (
        <div className='flex flex-col gap-8'>
          <h2 className='text-xl'>Shopping Cart</h2>
          {/*ITEM  */}
          <div className='flex gap-4'>
            <Image
              src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='product image'
              width={72}
              height={96}
              className='object-cover rounded-md'
            />

            <div className='flex flex-col justify-between w-full gap-8'>
              {/* TOP */}
              <div className='flex flex-col'>
                {/* TITLE */}
                <div className='flex items-center justify-between gap-8'>
                  <h3 className='font-semibold'>Product name</h3>
                  <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                </div>
                {/* DESC */}
                <div className='text-sm text-gray-500'>available</div>
              </div>
              {/* BOTTOM */}
              <div className='flex justify-between'>
                <span className='text-gray-500'>Qty. 2</span>
                <span className='text-blue-500'>Remove</span>
              </div>
            </div>
          </div>
          {/*ITEM  */}
          <div className='flex gap-4'>
            <Image
              src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='product image'
              width={72}
              height={96}
              className='object-cover rounded-md'
            />

            <div className='flex flex-col justify-between w-full gap-8'>
              {/* TOP */}
              <div className='flex flex-col'>
                {/* TITLE */}
                <div className='flex items-center justify-between gap-8'>
                  <h3 className='font-semibold'>Product name</h3>
                  <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                </div>
                {/* DESC */}
                <div className='text-sm text-gray-500'>available</div>
              </div>
              {/* BOTTOM */}
              <div className='flex justify-between'>
                <span className='text-gray-500'>Qty. 2</span>
                <span className='text-blue-500'>Remove</span>
              </div>
            </div>
          </div>

          {/* NO ITEMS */}
          <div className='flex items-center justify-between font-semibold'>
            <span>Subtotal</span>
            <span>$49</span>
          </div>

          <p className='text-gray-500 text-sm'>
            Shopping and taxes calculated at checkout
          </p>

          <div className='flex justify-between text-sm'>
            <button className='py-3 px-4 border-2 rounded-md ring-1 ring-gray-300'>
              View Cart
            </button>
            <button className='py-3 px-4 border-2 rounded-md bg-black text-white'>Check out</button>
          </div>
        </div>
      )}
    </div>
  )
}
