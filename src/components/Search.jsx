import React from 'react';
import { FaSearch } from "react-icons/fa";
import { AiOutlineFilter } from "react-icons/ai";
import Filters from './Filters';


function Search({ products, setProducts, showFilterModal, setShowFilterModal,setSearchText,handleSearch }) {



  
  return (
    <section className='border-0 py-4 pl-2 flex justify-center items-center  md:w-[70%] lg:w-[80%] xl:w-[90%]' >
      <form onSubmit={(e) => handleSearch(e)} className="w-4/5 flex justify-end items-center">

        <input type="text" placeholder='Search products' className='outline-none w-4/5 border-b-2 border-b-sky-700 p-1' onChange={(e) => setSearchText(e.target.value)} />
        <FaSearch className='bg-slate-500 text-white hover:bg-sky-700 w-8 h-8 p-1 rounded-md self-start' onClick={handleSearch}/>
      </form>


      <AiOutlineFilter className='lg:hidden bg-slate-500 text-white hover:bg-sky-700 w-8 h-8 p-1 ml-2 rounded-md' onClick={() => setShowFilterModal(!showFilterModal)} />

      {showFilterModal ? <div className='fixed top-0 bg-white z-50 right-0 h-[100vh] w-4/5'> <p onClick={() => setShowFilterModal(!showFilterModal)} className="text-red-600 text-left ml-4 text-3xl">X</p>
        <div className='w-full h-full fixed'>

          <Filters />
        </div>
      </div> : ""}
    </section>
  )
}

export default Search