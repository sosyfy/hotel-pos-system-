import React from 'react'
import { BiGridAlt } from "react-icons/bi"
import shallow from 'zustand/shallow';
import { useNav } from '../stores/user.store';


function Header() {
    const [open, setOpen] = useNav((state) => ([state.open, state.setOpen]), shallow);
    return (
        <div className={` ${open ? "-z-10 md:z-10" : "z-10"} transition-all ease-in duration-150 duration-400 sticky top-0 bg-white  shadow-md rounded-lg`}>
            <div className="flex transition duration-400 items-center   justify-between px-4 py-5">
                <div className="title">
                    <h2 className='font-bold text-lg text-gray-600'>POS System</h2>
                </div>
                <ul className="flex items-center">
                    <li className='hidden md:inline-block'>
                        <div className=''>
                            <input type="text" className="focus:outline-none focus:ring-0 focus:border py-1 px-2 font-semibold rounded-md bg-gray-100 border border-gray-300" placeholder="Search here..." />
                        </div>
                    </li>
                    <li className='md:hidden'>
                        {!open &&
                            <BiGridAlt className='text-xl cursor-pointer' onClick={() => setOpen(!open)} />
                        }
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Header