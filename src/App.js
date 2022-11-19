
import { Route, Navigate, Link, BrowserRouter, Routes } from "react-router-dom";
import { Suspense } from 'react'
import SideBar from './components/SideBar';
import shallow from 'zustand/shallow'
import { useNav } from './stores/user.store';
import authService from './services/auth.service';
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
   console.log(authService.getCurrentUserAccessToken());

   const [ open , setOpen ] = useNav((state)=>([ state.open ,state.setOpen]), shallow );
  return (

      <BrowserRouter>
       { authService.getCurrentUserAccessToken() === null ? (
           <div>
              <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />}></Route>
              </Routes> 
           </div> 

       ) : (
          <main className='w-Screen flex'>
              <SideBar />
              <section   className={`${ open ? "md:ml-60" : "md:ml-32" } duration-500 flex justify-between align-baseline w-full`}>
                 { authService.getCurrentUserType() === "ADMIN" && (
                    <Routes>
                      <Route exact path="/" element={<Dashboard />} />

                      <Route path="*" element={ <Navigate to="/" /> } />
                    </Routes>  
                 )}   
              </section> 
          </main> 
         )
       }
      </BrowserRouter>
  );
}

export default App;