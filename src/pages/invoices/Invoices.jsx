import React from 'react'

function Invoices() {
    return (
        <div className='bg-gray-200 min-h-screen p-4'>
            <div className="flex justify-between items-center mb-4 py-2 px-2 bg-white">
                <h2 className="text-xl font-semibold leading-loose text-gray-700">Invoices</h2>
                <button className="flex py-2 px-4 rounded-lg border border-gray-700 gap-x-2.5">
                    <span className="text-sm text-black">Filter order</span>
                </button>
            </div>

            {/* table  */}
            <div className="w-full m-w-prose overflow-auto bg-white rounded px-2">
                <table className="my-5 w-full border-collapse">
                    <thead>
                        <tr className="text-sm font-semibold uppercase  text-gray-900">
                            <th className='whitespace-nowrap p-2 md:p-4 border'>#</th>
                            <th className='whitespace-nowrap p-2 md:p-4 border'>invoice no</th>
                            <th className='whitespace-nowrap p-2 md:p-4 border'>supplier</th>
                            <th className='whitespace-nowrap p-2 md:p-4 border'>item</th>
                            <th className='whitespace-nowrap p-2 md:p-4 border'>quantity</th>
                            <th className='whitespace-nowrap p-2 md:p-4 border'>item Cost</th>
                            <th className='whitespace-nowrap p-2 md:p-4 border'>Total Cost</th>
                            <th className='whitespace-nowrap p-2 md:p-4 border'>reciever</th>
                            <th className='whitespace-nowrap p-2 md:p-4 border'>Date issued</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-sm font-medium text-gray-900 border">
                            <td className='px-2 md:p-2 border text-center'>1</td>
                            <td className='px-2 md:p-2 border text-center'>14334333</td>
                            <td className='px-2 md:p-2 border capitalize text-center'>Sospeter</td>
                            <td className='px-2 md:p-2 border capitalize text-center'>Tomatoes </td>
                            <td className='px-2 md:p-2 border capitalize text-center'>2 Gunias</td>
                            <td className='px-2 md:p-2 border capitalize text-center whitespace-nowrap'>ksh 500</td>
                            <td className='px-2 md:p-2 border capitalize text-center whitespace-nowrap'>ksh 1000</td>
                            <td className='px-2 md:p-2 border capitalize text-center '>Richard Machomba</td>
                            <td className='px-2 md:p-2 border capitalize text-center whitespace-nowrap'>12-jun-2022</td>
                        </tr>
                        <tr className="text-sm font-medium text-gray-900 border">
                            <td className='px-2 md:p-2  border text-center'>2</td>
                            <td className='px-2 md:p-2  border text-center'>14334333</td>
                            <td className='px-2 md:p-2  border capitalize text-center'>Sospeter</td>
                            <td className='px-2 md:p-2  border capitalize text-center'>Tomatoes </td>
                            <td className='px-2 md:p-2  border capitalize text-center'>2 Gunias</td>
                            <td className='px-2 md:p-2  border capitalize text-center whitespace-nowrap'>ksh 500</td>
                            <td className='px-2 md:p-2  border capitalize text-center whitespace-nowrap'>ksh 1000</td>
                            <td className='px-2 md:p-2  border capitalize text-center '>Richard Machomba</td>
                            <td className='px-2 md:p-2  border capitalize text-center whitespace-nowrap'>12-jun-2022</td>
                        </tr>
                        <tr className="text-sm font-medium text-gray-900 border">
                            <td className='px-2 md:p-2 border text-center'>3</td>
                            <td className='px-2 md:p-2 border text-center'>14334333</td>
                            <td className='px-2 md:p-2 border capitalize text-center'>Sospeter</td>
                            <td className='px-2 md:p-2 border capitalize text-center'>Tomatoes </td>
                            <td className='px-2 md:p-2 border capitalize text-center'>2 Gunias</td>
                            <td className='px-2 md:p-2 border capitalize text-center whitespace-nowrap'>ksh 500</td>
                            <td className='px-2 md:p-2 border capitalize text-center whitespace-nowrap'>ksh 1000</td>
                            <td className='px-2 md:p-2 border capitalize text-center '>Richard Machomba</td>
                            <td className='px-2 md:p-2 border capitalize text-center whitespace-nowrap'>12-jun-2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Invoices