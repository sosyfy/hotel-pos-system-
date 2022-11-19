
import { BrowserRouter, Routes } from 'react-router-dom';
import { Suspense } from 'react'
import SideBar from './components/SideBar';
import shallow from 'zustand/shallow'
import { useNav } from './stores/user.store';


function App() {
  const [ open , setOpen ] = useNav((state)=>([ state.open ,state.setOpen]), shallow );
  return (
    <Suspense >
      <BrowserRouter>
       {/* <Samples /> */}
       <main className='w-Screen flex'>
          <SideBar />
          <section   className={`${ open ? "md:ml-60" : "md:ml-32" } duration-500 flex justify-between align-baseline w-full`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aspernatur quis impedit tempora eveniet repellendus exercitationem esse. Modi cupiditate molestias voluptates harum explicabo commodi. In eligendi accusamus nam neque dignissimos!</p>
             <button className='' onClick={()=> setOpen(!open)}> close </button>
          </section> 
       </main>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;