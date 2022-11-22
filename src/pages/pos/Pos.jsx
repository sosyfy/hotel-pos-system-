import React from 'react'
import {MdRestaurantMenu} from 'react-icons/md'
import {GiTakeMyMoney} from 'react-icons/gi'
import {CiMoneyCheck1} from 'react-icons/ci'

function Pos() {
  return (
    <section className='w-full p-4 bg-gray-200 h-screen'>
      {/* 
        two section
        one cart 
        one items 
        
        items 
         
        header
        categories 

        heading 

        cards 
      
      */}

      <div className="grid grid-cols-12 w-full h-full gap-2">
        {/* right side  */}
        <div className="col-span-8 bg-slate-50/50 rounded min-h-max w-full pt-4 px-2">
          {/* header  */}
          <div className="header flex items-baseline justify-between">
            <h2 className='font-semibold text-base text-gray-800 leading-3 whitespace-nowrap ' >Choose Category </h2>
          </div>
          {/* categories  */}
           <div className='flex pt-4 gap-3'>
            <button className="card rounded-lg p-3 px-4 bg-white">
              <MdRestaurantMenu className='h-4 mx-auto'/>
              <p className='text-gray-700 font-bold text-sm'>Breakfast</p>
            </button>
          

           </div>

           {/* header  */}
           <div className="flex my-3 px-2 justify-between items-center">
            <h4 className='font-semibold text-gray-600 text-sm'>All</h4>
            <p className='font-semibold text-[0.7rem] text-gray-500'>12 All results</p>
           </div>

           {/* cards  */}

           <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="col-span-1 bg-white rounded-md shadow-sm px-2 py-3 group hover:shadow-lg hover:scale-[102%] transition duration-300 ease-linear">
                <div className="px-0 h-20 lg:h-28 rounded-lg">
                 <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="img" className='w-full rounded h-full' />
                </div>
                <p className='text-center text-xs font-medium py-2 leading-tight break-all '>Rvjfvhdvidjvice + Beklmfpvfvfoivjfovjans </p>
                <p className='font-bold bg-gray-200 text-center rounded text-base'> Ksh 100</p>
              </div>
           </div>
          
        </div>
        {/*  
          //? CART  SECTION
        */}
        <aside className="col-span-4 bg-white rounded min-h-max px-3 py-4">
        {/* payment method */}
        <h5 className='font-medium pt-2'>Payment Method</h5>
        <div className="flex justify-center gap-4 pt-2">
          <button className="px-1 lg:px-4 bg-white border py-2 rounded  w-full flex flex-col lg:flex-row justify-around items-center hover:bg-slate-50">
            <CiMoneyCheck1 className='text-lg' size={30}  />
            <p className='text-gray-500 font-bold text-xs uppercase '>m-pesa</p>
          </button>
          <button className="px-1 lg:px-4 bg-white border py-2 rounded  w-full flex flex-col lg:flex-row justify-around items-center hover:bg-slate-50">
            <GiTakeMyMoney className='text-lg' size={25}  />
            <p className='text-gray-500 font-bold text-xs uppercase '>Cash</p>
          </button>
        </div>
        <button className="w-full mt-4 bg-green-400 rounded py-1 font-bold text-gray-700">
          Print bill 
        </button>
        </aside>

      </div>


    </section>
  )
}

export default Pos