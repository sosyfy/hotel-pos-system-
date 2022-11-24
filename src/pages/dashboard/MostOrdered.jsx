import React from 'react'

function MostOrdered() {
    const mostOrdered = [
        {
            name: "Spicy seasoned seafood noodles",
            count: 200,
        },
        {
            name: "Salted pasta with mushroom sauce",
            count: 120,
        },
        {
            name: "Beef dumpling in hot and sour soup",
            count: 80,
        },
    ];
    return (
        <div class="flex flex-col p-6 bg-gray-100 rounded-lg gap-y-6 shadow">
            <div class="flex justify-between items-center">
                <h2 class="text-xl font-semibold leading-loose text-black">Most Ordered</h2>
                <button class="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
                    <span class="text-sm text-black">Today</span>
                </button>
            </div>
            <hr class="border-gray-400" />
            <div class="flex flex-col gap-y-4">
                { mostOrdered?.map((order) => (
                    <div class="flex gap-x-4 items-center">
                        <img class="w-14 h-14" src="`/img/${order.image}`" alt="" />
                        <div class="flex flex-col gap-y-0.5">
                            <div class="text-sm font-medium text-black">{ order.name }</div>
                            <div class="text-xs text-gray-600">{order.count } dishes ordered</div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                class="py-3.5 rounded-lg  w-full border bg-green-400 text-primary text-sm font-semibold"
            >
                View all
            </button>
        </div>
    )
}

export default MostOrdered