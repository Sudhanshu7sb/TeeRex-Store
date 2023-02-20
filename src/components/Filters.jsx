import React from 'react'
import { useFilterContext } from '../context/filtersContext';


function Filters() {
    const { filterDispatch, color, price, gender, type } = useFilterContext();


    const handleColorChange = (e, option) => {
        const check = e.target.checked;
        filterDispatch({
            type: "COLOR",
            payload: { option, check }
        })
    }
    const handleGenderChange = (e, option) => {
        const check = e.target.checked;
        filterDispatch({
            type: "GENDER",
            payload: { option, check }
        })
    }

    const handleTypeChange = (e, option) => {
        const check = e.target.checked;
        filterDispatch({
            type: "TYPE",
            payload: { option, check }
        })
    }

    const handlePriceChange = (e, option) => {
        const check = e.target.checked;
        filterDispatch({
            type: "PRICE",
            payload: { option, check }
        })
    }

    const handleClear = () => {
        filterDispatch({
            type: "CLEAR",

        })
    }





    return (
        <aside className={` flex  flex-col  items-start my-5 space-x-4`}>
            <header className="flex justify-between w-full px-6 py-3 mb-5">
                <span className='font-semibold'>Filter</span>
                <button className=" text-red-600" onClick={handleClear}>Clear</button>
            </header>
            <h4 className="category-title px-3 font-semibold">Gender</h4>

            <div className="flex flex-col justify-start items-start px-6">

                <label className="cursor-pointer" >
                    <input className="input" type="checkbox" value="Men" onChange={(e) => handleGenderChange(e, "Men")} checked={gender.includes("Men")} />
                    <span className='ml-2'>Men</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="Women" onChange={(e) => handleGenderChange(e, "Women")} checked={gender.includes("Women")} />
                    <span className='ml-2'>Women</span>
                </label>

            </div>
            <h5 className="category-title px-3 font-semibold">Color</h5>

            <div className="flex flex-col justify-start items-start px-6">
                <label className="" >
                    <input className="input" type="checkbox" value="black" onChange={(e) => handleColorChange(e, "Black")} checked={color.includes("Black")} />
                    <span className='ml-2'>Black</span>
                </label>

                <label className="" >
                    <input className="input" type="checkbox" value="blue" onChange={(e) => handleColorChange(e, "Blue")} checked={color.includes("Blue")} />
                    <span className='ml-2'>Blue</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="green" onChange={(e) => handleColorChange(e, "Green")} checked={color.includes("Green")} />
                    <span className='ml-2'>Green</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="red" onChange={(e) => handleColorChange(e, "Red")} checked={color.includes("Red")} />
                    <span className='ml-2'> Red</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="pink" onChange={(e) => handleColorChange(e, "Pink")} checked={color.includes("Pink")} />
                    <span className='ml-2'> Pink</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="grey" onChange={(e) => handleColorChange(e, "Grey")} checked={color.includes("Grey")} />
                    <span className='ml-2'> Grey</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="white" onChange={(e) => handleColorChange(e, "White")} checked={color.includes("White")} />
                    <span className='ml-2'> White</span>
                </label>




            </div>

            <h5 className="category-title px-3 font-semibold">Price</h5>

            <div className="flex flex-col justify-start items-start px-6">


                <label className="" >
                    <input className="input" type="checkbox" value="0-250" onChange={(e) => handlePriceChange(e, "0-250")} checked={price.includes("0-250")} />
                    <span className='ml-2'>Rs 0 - 250</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="251-450" onChange={(e) => handlePriceChange(e, "251-450")} checked={price.includes("251-450")} />
                    <span className='ml-2'>Rs 251 - 450</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="450" onChange={(e) => handlePriceChange(e, "450")} checked={price.includes("450")} />
                    <span className='ml-2'> Above Rs 450</span>
                </label>

            </div>

            <h5 className="category-title px-3 font-semibold">Type</h5>

            <div className="flex flex-col justify-start items-start px-6">


                <label className="" >
                    <input className="input" type="checkbox" value="Basic" onChange={(e) => handleTypeChange(e, "Basic")} checked={type.includes("Basic")} />
                    <span className='ml-2'>Basic</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="Polo" onChange={(e) => handleTypeChange(e, "Polo")} checked={type.includes("Polo")} />
                    <span className='ml-2'>Polo</span>
                </label>
                <label className="">
                    <input className="input" type="checkbox" value="Hoodie" onChange={(e) => handleTypeChange(e, "Hoodie")} checked={type.includes("Hoodie")} />
                    <span className='ml-2'> Hoodie</span>
                </label>


            </div>




        </aside>
    )
}

export default Filters