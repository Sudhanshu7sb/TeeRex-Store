import React from 'react'
import { useFilterContext } from '../context/filtersContext';
import { getProductsByColor, getProductsByGender, getProductsByPrice, getProductsByType, searchedProducts } from '../helpers/helpers';
import SingleProductCard from "./SingleProductCard";



function Products({ products ,searchText}) {

  const { color, gender, type, price } = useFilterContext();

  const filterBySearch = searchedProducts(products,searchText);
  const filteredProductsByColor = getProductsByColor(products, color);
  const filteredProductsByGender = getProductsByGender(filteredProductsByColor, gender);
  const filteredProductsByType = getProductsByType(filteredProductsByGender, type);
  const filteredProductsByPrice = getProductsByPrice(filteredProductsByType, price);

  return (
    <section className='flex flex-wrap justify-around items-center w-[90%]'>
      {searchText.length>0 ? filterBySearch?.length > 0 ? (filterBySearch?.map((product, i) =>
          <SingleProductCard product={product} key={i} />
        )) :
          <h3>NO Products Found</h3> : filteredProductsByPrice?.length > 0 ? (filteredProductsByPrice?.map((product, i) =>
          <SingleProductCard product={product} key={i} />
        )) :
          <h3>NO Products Found</h3>}

    </section>
  )
}

export default Products