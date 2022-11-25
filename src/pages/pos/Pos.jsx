import React, { useState, useRef } from 'react'
import { MdRestaurantMenu } from 'react-icons/md'
import { GiTakeMyMoney } from 'react-icons/gi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { TbTrash } from 'react-icons/tb'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'
import { useReactToPrint } from 'react-to-print';


function Pos() {
  const componentRef = useRef();
  const [cart, setCart] = useState([])
  const [paymentMode, setPaymentMode] = useState('')
  const [products, setProducts] = useState([
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
  const [total, setTotal] = useState(0)

  const [show, setShow] = useState(0)

  const addToCart = (productId) => {

    const found = cart.some(el => el.id === productId);

    if (found) {

      let newProd = products.filter((p) => p.id === productId)

      const newCart = cart.map(p =>
        p.id === productId
          ? { ...p, quantity: p.quantity += 1, cost: p.cost + newProd[0].cost }
          : p
      );

      let sum = newCart.reduce(function (acc, obj) { return acc + obj.cost; }, 0);
      setTotal(sum)

      setCart(newCart)

    } else {
      let newProd = products.filter((p) => p.id === productId)
      newProd[0].quantity = 1
      setCart(() => [...cart, ...newProd])
    }
  }

  const increase = (productId) => {
    const newCart = cart.map(p =>
      p.id === productId
        ? { ...p, quantity: p.quantity += 1, cost: p.cost + p.cost }
        : p
    );
    let sum = newCart.reduce(function (acc, obj) { return acc + obj.cost; }, 0);
    setTotal(sum)
    setCart(newCart)
  }

  const decrease = (productId) => {
    let decProd = products.filter((p) => p.id === productId)
    console.log(decProd);
    const newCart = cart.map(p =>
      p.id === productId
        ? { ...p, quantity: p.quantity -= 1, cost: p.cost - decProd[0].cost }
        : p
    );

    const filtered = newCart.filter(p => p.quantity > 0)
    let sum = filtered.reduce(function (acc, obj) { return acc + obj.cost; }, 0);
    setTotal(sum)

    setCart(filtered)
  }


  const clearAll = () => { 
    setCart([]);
    setPaymentMode(null)}

  const remove = (id) => {

    let newCart = cart.filter((p) => p.id !== id)
    setCart(newCart)
  }

  let formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
  });

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const printBill = () => {
    handlePrint()
  }

  return (
    <section className='w-full p-4 bg-gray-200 h-screen overflow-auto'>

      <div className="grid grid-cols-12 w-full h-full gap-2">
        {/* right side  */}
        <div className="col-span-6 bg-slate-50/50 rounded min-h-max w-full pt-4 px-2">
          {/* header  */}
          <div className="header flex items-baseline justify-between">
            <h2 className='font-semibold text-base text-gray-800 leading-3 whitespace-nowrap ' >Choose Category </h2>
          </div>
          {/* categories  */}
          <div className='flex pt-5 gap-3 overflow-auto categories'>
            <button className="card rounded-lg p-3 px-4 bg-white">
              <MdRestaurantMenu className='h-4 mx-auto' />
              <p className='text-gray-700 font-bold text-sm'>Breakfast</p>
            </button>

            <button className="card rounded-lg p-3 px-4 bg-white">
              <MdRestaurantMenu className='h-4 mx-auto' />
              <p className='text-gray-700 font-bold text-sm'>Breakfast</p>
            </button>

            <button className="card rounded-lg p-3 px-4 bg-white">
              <MdRestaurantMenu className='h-4 mx-auto' />
              <p className='text-gray-700 font-bold text-sm'>Breakfast</p>
            </button>

            <button className="card rounded-lg p-3 px-4 bg-white">
              <MdRestaurantMenu className='h-4 mx-auto' />
              <p className='text-gray-700 font-bold text-sm'>Breakfast</p>
            </button>

            <button className="card rounded-lg p-3 px-4 bg-white">
              <MdRestaurantMenu className='h-4 mx-auto' />
              <p className='text-gray-700 font-bold text-sm'>Breakfast</p>
            </button>

            <button className="card rounded-lg p-3 px-4 bg-white">
              <MdRestaurantMenu className='h-4 mx-auto' />
              <p className='text-gray-700 font-bold text-sm'>Breakfast</p>
            </button>

            <button className="card rounded-lg p-3 px-4 bg-white">
              <MdRestaurantMenu className='h-4 mx-auto' />
              <p className='text-gray-700 font-bold text-sm'>Breakfast</p>
            </button>

            <button className="card rounded-lg p-3 px-4 bg-white">
              <MdRestaurantMenu className='h-4 mx-auto' />
              <p className='text-gray-700 font-bold text-sm'>Breakfast</p>
            </button>


          </div>

          {/* header  */}
          <div className="flex my-3 px-2 justify-between items-center">
            <h4 className='font-semibold text-gray-600 text-sm'>All</h4>
            <p className='font-semibold text-[0.7rem] text-gray-500'>{products?.length} results</p>
          </div>

          {/* cards  */}

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
            {products?.map((product) => (
              <div
                className="col-span-1 lg:py-8 bg-white rounded-md shadow-sm px-2 py-3 group hover:shadow-lg hover:scale-[102%] transition duration-300 ease-linear"
                onClick={() => addToCart(product.id)}
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
        <aside className="col-span-6 bg-white rounded-lg shadow-lg min-h-max px-3 py-4">
          {/* cart items  */}

          <div className="flex justify-between items-center py-2">
            <p className="font-bold text-base">Order</p>
            <button onClick={clearAll} className='font-bold text-gray-600 bg-slate-100 px-2 rounded-md'>clear all</button>
          </div>

          <div>
            {cart?.map((p) => (
              <div className="product flex flex-col md:flex-row justify-between items-center bg-slate-200 px-1 rounded-xl  gap-y-2 pb-3 my-2">
                <div className="flex py-2 px-1 items-center">
                  <div className='h-16 w-16 hidden lg:inline-block'>
                    <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="img" className='w-full rounded h-full' />
                  </div>
                  <div className='ml-1 px-1'>
                    <p className='text-xs md:text-sm font-bold text-gray-500 py-2'>{p.name}</p>
                    <p className='font-semibold text-sm  md:text-base'>{formatCurrency.format(p.cost)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => decrease(p.id)} className=""> <FiMinusCircle className='text-xl md:text-2xl' /> </button>
                  <p className='font-bold'>{p.quantity}</p>
                  <button onClick={() => increase(p.id)} className=""> < FiPlusCircle className='text-xl md:text-2xl' /> </button>
                  <TbTrash className='mr-2 text-lg md:text-xl' onClick={() => remove(p.id)} />
                </div>
              </div>
            ))}
          </div>
          {/* totals  */}
          <div className='py-5 bg-slate-100 px-2 rounded shadow-sm'>
            <div className="flex justify-between">
              <p className='font-bold text-sm'>Totals</p>
              <p className='font-bold text-sm'>{formatCurrency.format(total)}</p>
            </div>
          </div>
          {/* payment method */}
          {cart.length > 0 &&
            <h5 className='font-medium pt-2'>Payment Method</h5>
          }
          {cart.length > 0 &&
            <div className="flex justify-center gap-4 pt-2">
              <button
                style={{ backgroundColor: paymentMode === "MPESA" && "red" }}
                onClick={() => setPaymentMode("MPESA")}
                className={`px-1 lg:px-4 bg-white border py-2 rounded  w-full flex flex-col lg:flex-row justify-around items-center hover:bg-slate-50`}>
                <FaRegMoneyBillAlt className='text-lg' />
                <p className='text-gray-500 font-bold text-xs uppercase'>m-pesa</p>
              </button>
              <button
                style={{ backgroundColor: paymentMode === "CASH" && "red" }}
                onClick={() => setPaymentMode("CASH")}
                className={`px-1 lg:px-4 bg-white border py-2 rounded  w-full flex flex-col lg:flex-row justify-around items-center hover:bg-slate-50`}>
                <GiTakeMyMoney className='text-lg' />
                <p className='text-gray-500 font-bold text-xs uppercase '>Cash</p>
              </button>
            </div>}
          {/* print bill  */}
          {cart.length > 0 &&
            <button onClick={printBill} className="w-full mt-4 bg-green-400 rounded py-1 font-bold text-gray-700">
              Print bill
            </button>
          }
        </aside>

      </div>

      <div className=" bg-white hidden print:block mt-16 print:px-6 w-full" ref={componentRef} >
        <h3 className='text-center pt-2'>MMU HOTEL</h3>
        <table className="w-full mt-5 border-collapse my-5">
          <thead>
            <tr className="text-sm font-medium bg-gray-200 uppercase text-black">
              <th className='whitespace-nowrap px-2 py-4 text-start'>item</th>
              <th className='whitespace-nowrap  py-1 text-end'>Qty</th>
              <th className='whitespace-nowrap px-2 py-1 text-end'>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <tr className="text-xs font-medium text-black border-b border-black" key={item.name}>
                <td className='mx-16 break-all pl-2 py-4 text-start'>{item.name}</td>
                <td className='text-end px-2'>{item.quantity}</td>
                <td className='capitalize text-end px-3'>{formatCurrency.format(item.cost)}</td>
              </tr>
            ))}
            <tr className="text-sm rounded bg-gray-100 font-semibold text-black">
              <td className='py-10'></td>
              <td className='text-end'>Total</td>
              <td className='capitalize text-end px-3'>{formatCurrency.format(total)}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <p className="text-sm">
            Thank you for your business!
          </p>
          <p className="py-2 font-medium text-sm">
            served by Sospeter
          </p>
        </div>
      </div>

    </section>
  )
}

export default Pos