import React from 'react'

function MostTypeOfOrder() {
  return (
    <div class="flex flex-col p-6 bg-gray-100 rounded-lg shadow gap-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold leading-loose text-black">Most type of order</h2>
      <button class="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
        <span class="text-sm text-black">Today</span>
      </button>
    </div>
    <hr class="border-gray-400" />
    <div class="flex gap-x-7">
      <img width="176"  alt="" />
      <div class="flex flex-col gap-y-4">
        <div class="flex gap-x-2 items-start">
          <div class="w-5 h-4 mt-0.5 rounded-full bg-red-400" />
          <div>
            <div class="text-sm font-medium text-black">Mpesa</div>
            <div class="text-xs text-gray-500">200 customers</div>
          </div>
        </div>
        <div class="flex gap-x-2 items-start">
          <div class="w-5 h-4 mt-0.5 rounded-full bg-blue-400" />
          <div>
            <div class="text-sm font-medium text-black">Cash</div>
            <div class="text-xs text-gray-500">122 customers</div>
          </div>
        </div>
     
      </div>
    </div>
  </div>
  )
}

export default MostTypeOfOrder