
import { Route, Navigate, Link, BrowserRouter, Routes } from "react-router-dom";
import SideBar from './components/SideBar';
import shallow from 'zustand/shallow'
import { useNav } from './stores/user.store';
import authService from './services/auth.service';
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Pos from "./pages/pos/Pos";
import Header from "./components/Header";
import Invoices from "./pages/invoices/Invoices";


function App() {

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
              <section   className={`${ open ? "md:ml-60" : "md:ml-28" } w-full`}>
                  <Header />
                 { authService.getCurrentUserType() === "ADMIN" && (
                    <Routes>
                      <Route exact path="/" element={<Dashboard />} />
                      <Route exact path="/pos" element={<Pos />} />
                      <Route exact path="/invoices" element={<Invoices />} />

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