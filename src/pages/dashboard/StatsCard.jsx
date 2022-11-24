import React from 'react'
import {BsCoin,BsFillPeopleFill,BsBookmarkDash, BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs"


function StatsCard() {
    const stats = [
        {
            title: "Total Revenue",
            percentage: "+32.40%",
            value: "$10,243.00",
            status: "up",
            icon: BsCoin,
        },
        {
            title: "Total Dish Ordered",
            percentage: "-12.40%",
            value: "23,456",
            status: "down",
            icon: BsBookmarkDash,
        },
        {
            title: "Total Customer",
            percentage: "+2.40%",
            value: "1,234",
            status: "up",
            icon: BsFillPeopleFill,
        },
    ];


    return (
        <div className='flex gap-6 flex-col md:flex-row'>
            {stats?.map((stat) => (
                <div className="flex flex-col p-4 w-full md:w-1/3 bg-gray-100 rounded-lg gap-y-3">
                    <div class="flex items-center gap-x-3">
                        <div class="p-2 bg-gray-400 text-white rounded-lg text-lg lg:text-xl">
                        { React.createElement(stat?.icon)}
                        </div>
                        <span class={`text-base font-medium ${stat.status === 'up' ? 'text-green-300' : 'text-red-300'} `}>
                            {stat.percentage}
                        </span>
                        <div class={`text-xs font-medium ${stat.status === 'up' ? 'text-green-300' : 'text-red-300'} `}>
                            {stat.status === 'up' ? (
                                <BsArrowDownCircle  class="fill-current text-accent-red text-lg" /> 
                            ): (
                                <BsArrowUpCircle  class="fill-current text-accent-red text-lg" /> 
                            ) }
                        </div>
                    </div>


                    <div class="text-3xl font-semibold text-black">{stat.value}</div>
                    <div class="text-sm tracking-wide font-medium text-gray-500">{stat.title}</div>

                </div>
            ))}
        </div>
    )
}

export default StatsCard