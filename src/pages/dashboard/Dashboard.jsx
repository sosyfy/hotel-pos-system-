import React from 'react'
import MostOrdered from './MostOrdered';
import MostTypeOfOrder from './MostTypeOfOrder';
import StatsCard from './StatsCard';


function Dashboard() {
 

  return (
    <div className="min-h-screen">
      <main className="flex flex-col flex-1 gap-4 p-4 pt-1 md:pt-4">
        <header className='flex flex-col md:flex-row justify-between md:items-center items-start'>
          <h1 className="text-3xl font-semibold leading-loose">Dashboard</h1>
          <div className="text-gray-800 -mt-2 md:mt-0">Friday 25 Nov, 2022</div>
        </header>
        <hr className="border-gray-400" />
        <StatsCard />
      </main>
      <aside className="flex flex-col md:flex-row gap-y-6 gap-x-5 p-4 w-full">
        <MostOrdered />
        <MostTypeOfOrder />
      </aside>
    </div>
  )
}

export default Dashboard