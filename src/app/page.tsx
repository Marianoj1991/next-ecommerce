import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider />
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32'>
        <h2 className="text-2xl text-center">Featured Products</h2>
        <ProductList />
      </div>
      <div className= 'mt-24 px-4'>
        <h2 className="text-2xl text-center">Categories</h2>
        <CategoryList />
      </div>
      <div className= 'mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32'>
        <h2 className="text-2xl text-center">New Products</h2>
        <ProductList />
      </div>
    </div>
  ) 
}

export default HomePage  