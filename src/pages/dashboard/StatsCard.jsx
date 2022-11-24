import React from 'react'
import {BsCoin,BsFillPeopleFill,BsBookmarkDash, BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs"


function StatsCard() {
    const stats = [
        {
            title: "Total Revenue",
            percentage: "+32.40%",
            value: "10243.00",
            status: "up",
            icon: BsCoin,
        },
        {
            title: "Total Dish Ordered",
            percentage: "-12.40%",
            value: "23456",
            status: "down",
            icon: BsBookmarkDash,
        },
        {
            title: "Total Customer",
            percentage: "+2.40%",
            value: "1234",
            status: "up",
            icon: BsFillPeopleFill,
        },
    ];

    let formatCurrency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      });

    return (
        <div className='flex gap-6 flex-col md:flex-row'>
            {stats?.map((stat) => (
                <div className="flex flex-col p-4 w-full md:w-1/3 bg-gray-100 rounded-lg gap-y-3" key={stat.title}>
                    <div className="flex items-center gap-x-3">
                        <div className="p-2 bg-gray-400 text-white rounded-lg text-lg lg:text-xl">
                        { React.createElement(stat?.icon)}
                        </div>
                        <span className={`text-base font-medium ${stat.status === 'up' ? 'text-green-300' : 'text-red-300'} `}>
                            {stat.percentage}
                        </span>
                        <div className={`text-xs font-medium ${stat.status === 'up' ? 'text-green-300' : 'text-red-300'} `}>
                            {stat.status === 'up' ? (
                                <BsArrowDownCircle  className="fill-current text-accent-red text-lg" /> 
                            ): (
                                <BsArrowUpCircle  className="fill-current text-accent-red text-lg" /> 
                            ) }
                        </div>
                    </div>


                    <div className="text-3xl font-semibold text-black">{ formatCurrency.format(stat.value)}</div>
                    <div className="text-sm tracking-wide font-medium text-gray-500">{stat.title}</div>

                </div>
            ))}
        </div>
    )
}

export default StatsCard