import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import { useDispatch } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { setCategoryFilter, setSubCategoryFilter, setSort } from '../../store/slices/productSlice';
function Collection() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProducts);
  const [showFilter, setShowFilter] = useState(false);
  
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    dispatch(setCategoryFilter({ value, checked }));
  };

  const handleSubCategoryChange = (e) => {
    const { value, checked } = e.target;
    dispatch(setSubCategoryFilter({ value, checked }));
  };

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*Filter Options*/}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' onClick={()=>(setShowFilter(!showFilter))} ></img>
        </p>
        {/*Filter by Category*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Men'} onChange={handleCategoryChange} />Men
          </p>
          <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Women'} onChange={handleCategoryChange} />Women
          </p>
          <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Kids'} onChange={handleCategoryChange} />Kids
          </p>
        </div>
        </div>
        {/*Filter by Sub-Category*/}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>SUB-CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Topwear'} onChange={handleSubCategoryChange} />Topwear
          </p>
          <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={handleSubCategoryChange}/>Bottomwear
          </p>
          <p className='flex gap-2'>
          <input className='w-3' type='checkbox' value={'Winterwear'} onChange={handleSubCategoryChange}/>Winterwear
          </p>
        </div>
        </div>
      </div>
      {/*Right Side*/}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"OUR "} text2={"COLLECTION"} />
          {/*Sort By*/}
          <select 
  className='border-1 border-gray-400 rounded-xl text-sm px-2' 
  onChange={handleSortChange}
>
  <option value="relavent">Sort by: Relavent</option>
  <option value="low-high">Sort by: Low to High</option>
  <option value="high-low">Sort by: High to Low</option>
</select>

        </div>
        {/*Product Items*/}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6'>
          {products.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}

        </div>
      </div>
      </div>
  )
}

export default Collection

