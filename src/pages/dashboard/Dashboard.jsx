import React from 'react'
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import shallow from 'zustand/shallow';
import { useNav } from '../../stores/user.store';


function Dashboard() {
  const [open, setOpen] = useNav((state) => ([state.open, state.setOpen]), shallow);
  return (
    <div className="px-3">
      <div className="grid grid-cols-12 mt-4 px-2  gap-x-5 gap-y-4 lg:gap-10">

        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="flex justify-around  rounded-lg border py-4 px-3 bg-gradient-to-r from-cyan-400 to-blue-200 items-center ">
            <div className="svg">
              <FaRegMoneyBillAlt className="text-4xl" />
            </div>
            <div className="grid gap-1">
              <h2 className="font-bold text-lg">Ksh 44,323</h2>
              <p className='text-sm font-thin'>Total sales</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="flex justify-around rounded-lg border py-4 px-3 bg-gradient-to-r from-cyan-400 to-blue-200 items-center ">
            <div className="svg">
              <FaRegMoneyBillAlt className="text-4xl" />
            </div>
            <div className="grid gap-1">
              <h2 className="font-bold text-lg">Ksh 44,323</h2>
              <p className='text-sm font-thin'>Total sales</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="flex justify-around rounded-lg border py-4 px-3 bg-gradient-to-r from-cyan-400 to-blue-200 items-center ">
            <div className="svg">
              <FaRegMoneyBillAlt className="text-4xl" />
            </div>
            <div className="grid gap-1">
              <h2 className="font-bold text-lg">Ksh 44,323</h2>
              <p className='text-sm font-thin'>Total sales</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="flex justify-around rounded-lg border py-4 px-3 bg-gradient-to-r from-cyan-400 to-blue-200 items-center ">
            <div className="svg">
              <FaRegMoneyBillAlt className="text-4xl" />
            </div>
            <div className="grid gap-1">
              <h2 className="font-bold text-lg">Ksh 44,323</h2>
              <p className='text-sm font-thin'>Total sales</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard