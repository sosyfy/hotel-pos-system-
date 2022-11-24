import React from 'react'
import MostOrdered from './MostOrdered';
import MostTypeOfOrder from './MostTypeOfOrder';
import StatsCard from './StatsCard';


function Dashboard() {

  return (
    <div className="min-h-screen">
      <main class="flex flex-col flex-1 gap-6 p-4">
        <header>
          <h1 class="text-3xl font-semibold leading-loose">Dashboard</h1>
          <div class="text-gray-800">Tuesday 2 Feb, 2021</div>
        </header>
        <hr class="border-gray-700" />
        <StatsCard />
      </main>
      <aside class="flex flex-col md:flex-row gap-y-6 gap-x-5 p-4">
        <MostOrdered />
        <MostTypeOfOrder />
      </aside>
    </div>
  )
}

export default Dashboard