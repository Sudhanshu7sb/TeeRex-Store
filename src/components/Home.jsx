import React, { useState } from 'react'
import Filters from './Filters'
import Products from './Products'
import Search from './Search'

const Home = ({ products, setProducts }) => {

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [searchText, setSearchText] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
  }

  return (
    <main className="App">
      <Search products={products} setProducts={setProducts} showFilterModal={showFilterModal} setShowFilterModal={setShowFilterModal} setSearchText={setSearchText} handleSearch={handleSearch}/>
      <section className='w-full flex justify-center lg:justify-between '>

        <Filters />
        <Products products={products} searchText={searchText}/>
      </section>
    </main>
  )
}

export default Home