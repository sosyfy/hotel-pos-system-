import React from 'react'

function MostOrdered() {
    const mostOrdered = [
        {
            name: "Chapati ndengu ",
            count: 200,
        },
        {
            name: "Rice and beans ",
            count: 120,
        },
        {
            name: "Beef  and ugali ",
            count: 80,
        },
    ];
    return (
        <div className="flex flex-col p-6 bg-gray-100 rounded-lg gap-y-6 shadow basis-1/2">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold leading-loose text-black">Most Ordered</h2>
                <button className="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
                    <span className="text-sm text-black">Today</span>
                </button>
            </div>
            <hr className="border-gray-400" />
            <div className="flex flex-col gap-y-4">
                { mostOrdered?.map((order) => (
                    <div className="flex gap-x-4 items-center" key={order.name}>
                        <img className="w-14 h-14" src="`/img/${order.image}`" alt="" />
                        <div className="flex flex-col gap-y-0.5">
                            <div className="text-sm font-medium text-black">{ order.name }</div>
                            <div className="text-xs text-gray-600">{order.count } dishes ordered</div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="py-3.5 rounded-lg  w-full border bg-green-400 text-primary text-sm font-semibold"
            >
                View all
            </button>
        </div>
    )
}

export default MostOrdered