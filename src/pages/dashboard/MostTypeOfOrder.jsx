import React from 'react'

function MostTypeOfOrder() {
  return (
    <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow gap-y-6 basis-1/2">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold leading-loose text-black">Most type of order</h2>
      <button className="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
        <span className="text-sm text-black">Today</span>
      </button>
    </div>
    <hr className="border-gray-400" />
    <div className="flex gap-x-7 mx-auto">
      <img width="176"  alt="" />
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-2 items-start">
          <div className="w-4 h-4 mt-0.5 rounded-full bg-red-400" />
          <div>
            <div className="text-sm font-medium text-black">Mpesa</div>
            <div className="text-xs text-gray-500">200 customers</div>
          </div>
        </div>
        <div className="flex gap-x-2 items-start">
          <div className="w-4 h-4 mt-0.5 rounded-full bg-blue-400" />
          <div>
            <div className="text-sm font-medium text-black">Cash</div>
            <div className="text-xs text-gray-500">122 customers</div>
          </div>
        </div>
     
      </div>
    </div>
  </div>
  )
}

export default MostTypeOfOrder