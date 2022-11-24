import React, { useState } from 'react'
import {MdRestaurantMenu} from 'react-icons/md'
import {GiTakeMyMoney} from 'react-icons/gi'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {TbTrash} from 'react-icons/tb'

function Pos() {

  const [cart , setCart ]  = useState([])
  const [ paymentMode , setPaymentMode ]  = useState('')
  const [ products , setProducts] = useState( [
    {
      name: "gpfdof",
      cost: 20,
      quantity: 0,
      id: 1
    },
    {
      name: "bana",
      cost: 10,
      quantity: 0,
      id: 2
    }
  ])
  const [total , setTotal] = useState(0)

  const addToCart = ( productId )=>{
 
     const found = cart.some(el => el.id === productId );
     
     if (found) {

      let newProd = products.filter((p)=> p.id === productId )
     
      const newCart  = cart.map(p =>
       p.id === productId 
          ? { ...p, quantity: p.quantity += 1 , cost : p.cost + newProd[0].cost}
          : p
      );

      let sum  = newCart.reduce(function (acc, obj) { return acc + obj.cost ; }, 0 );
      setTotal(sum)

      setCart(newCart)
      
     } else {
      let newProd = products.filter((p)=> p.id === productId )
      newProd[0].quantity = 1 
      setCart(()=> [...cart, ...newProd])
     }  
  }

  const increase = ( productId)=>{
    const newCart  = cart.map(p =>
      p.id === productId 
          ? { ...p, quantity: p.quantity += 1 , cost : p.cost + p.cost   }
          : p
      );
      let sum  = newCart.reduce(function (acc, obj) { return acc + obj.cost ; }, 0);
      setTotal(sum)
    setCart(newCart)
  }

  const decrease = ( productId)=>{
    let decProd = products.filter((p)=> p.id === productId)
    console.log(decProd);
    const newCart  = cart.map(p =>
      p.id === productId 
          ? { ...p, quantity: p.quantity -= 1, cost : p.cost - decProd[0].cost   }
          : p
      );

    const filtered = newCart.filter( p => p.quantity > 0 )
    let sum  = filtered.reduce(function (acc, obj) { return acc + obj.cost ; }, 0);
    setTotal(sum)

    setCart( filtered )
  }

 
  const clearAll = ()=> setCart([])

 const remove = ( id) => {
   
  let newCart = cart.filter((p)=> p.id !== id )
  setCart(newCart)
 }

  return (
    <section className='w-full p-4 bg-gray-200 h-screen overflow-hidden'>
    

      <div className="grid grid-cols-12 w-full h-full gap-2">
        {/* right side  */}
        <div className="col-span-7 bg-slate-50/50 rounded min-h-max w-full pt-4 px-2">
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
            <p className='font-semibold text-[0.7rem] text-gray-500'>{ products?.length } results</p>
           </div>

           {/* cards  */}

           <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
             { products?.map((product)=>(
               <div 
               className="col-span-1 lg:py-8 bg-white rounded-md shadow-sm px-2 py-3 group hover:shadow-lg hover:scale-[102%] transition duration-300 ease-linear"
               onClick={ () => addToCart(product.id) } 
               key={product.name}
               >
               <div className="px-0 h-20 lg:h-28 rounded-lg">
                <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="img" className='w-full rounded h-full' />
               </div>
               <p className='text-center text-xs font-medium py-4 leading-tight break-all '>{product?.name}</p>
               <p className='font-bold py-2 bg-gray-200 text-center rounded text-base'> Ksh {product?.cost}</p>
               </div>
             ))}
           </div>
          
        </div>
        {/*  
          //? CART  SECTION
        */}
        <aside className="col-span-5 bg-white rounded-lg shadow-lg min-h-max px-3 py-4">
        {/* cart items  */}
      
         <div className="flex justify-between items-center py-2">
           <p className="font-bold text-base">Order</p>
           <button onClick={clearAll} className='font-bold text-gray-600 bg-slate-100 px-2 rounded-md'>clear all</button>
         </div>
          
          <div>
          { cart?.map((p)=>(
           <div className="product flex justify-between items-center bg-slate-200 px-1 rounded-xl my-2">
           <div className="flex py-2 px-1 items-center">
             <div className='h-16 w-16'>
             <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="img" className='w-full rounded h-full' />
             </div>
             <div className='ml-1 px-1'>
               <p className='text-sm font-bold text-gray-500'>{p.name}</p>
               <p className='font-semibold text-base'>Ksh {p.cost}</p>
             </div>
           </div>
           <div className="flex items-center gap-2">
            <button onClick={ ()=> decrease(p.id)} className="rounded-full h-8 w-8 font-bold bg-transparent border-2 border-green-400"> - </button>
            <p className='font-bold'>{ p.quantity }</p>
            <button onClick={ ()=> increase(p.id)} className="rounded-full font-bold h-8 w-8 bg-transparent border-2 border-green-400"> + </button>
            <TbTrash className='mr-2 text-xl' onClick={ ()=>remove(p.id)} />
           </div>
          </div>
        ))}
          </div>
         {/* totals  */}
         <div className='py-5 bg-slate-100 px-2 rounded shadow-sm'>
          <div className="flex justify-between">
            <p className='font-bold text-sm'>Totals</p>
            <p className='font-bold text-sm'>ksh {total}</p>
          </div>
         </div>
        {/* payment method */}
        <h5 className='font-medium pt-2'>Payment Method</h5>
        <div className="flex justify-center gap-4 pt-2">
        <button 
          style={{backgroundColor: paymentMode === "MPESA" && "red"}} 
          onClick={()=> setPaymentMode("MPESA")} 
          className={`px-1 lg:px-4 bg-white border py-2 rounded  w-full flex flex-col lg:flex-row justify-around items-center hover:bg-slate-50`}>
            <FaRegMoneyBillAlt className='text-lg'  />
            <p className='text-gray-500 font-bold text-xs uppercase'>m-pesa</p>
          </button>
          <button 
           style={{backgroundColor: paymentMode === "CASH" && "red"}}
           onClick={()=> setPaymentMode("CASH")}  
           className={`px-1 lg:px-4 bg-white border py-2 rounded  w-full flex flex-col lg:flex-row justify-around items-center hover:bg-slate-50`}>
            <GiTakeMyMoney className='text-lg' />
            <p className='text-gray-500 font-bold text-xs uppercase '>Cash</p>
          </button>
        </div>
        {/* print bill  */}
        <button className="w-full mt-4 bg-green-400 rounded py-1 font-bold text-gray-700">
          Print bill 
        </button>
        </aside>

      </div>


    </section>
  )
}

export default Pos