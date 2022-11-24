import React from 'react'
import shallow from 'zustand/shallow';
import { useNav } from '../../stores/user.store';


function Dashboard() {
  const [open, setOpen] = useNav((state) => ([state.open, state.setOpen]), shallow);
  return (
    <div className="px-3">
      <div className="grid grid-cols-12 mt-4 px-2">

        <div className="col-span-12 md:col-span-4">
          <div className="flex justify-around rounded-lg border py-4 px-3 bg-gradient-to-r from-cyan-400 to-blue-200 items-center mr-3">
            <div className="svg">
             
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