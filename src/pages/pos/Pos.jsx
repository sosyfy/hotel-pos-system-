import React from 'react'

function Pos() {
  return (
    <section className='w-full p-4 bg-gray-200 h-screen'>
      {/* 
        two section
        one cart 
        one items 
        
        items 
         
        header
        categories 

        heading 

        cards 
      
      */}
     
     <div className="grid grid-cols-12 w-full h-full gap-3">
        {/* right side  */}
       <div className="col-span-8 bg-slate-50/50 rounded min-h-max">
        {/* header  */}
        <h2>Choose Category </h2>
       </div>
        {/* cart  */}
       <aside className="col-span-4 bg-white rounded min-h-max">

       </aside>

     </div>


    </section>
  )
}

export default Pos