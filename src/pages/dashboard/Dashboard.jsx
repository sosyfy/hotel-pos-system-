import React from 'react'
import shallow from 'zustand/shallow';
import { useNav } from '../../stores/user.store';


function Dashboard() {
  const [open, setOpen] = useNav((state)=>([ state.open , state.setOpen]), shallow );
  return (
    <div>Dashboard
      
    </div>
  )
}

export default Dashboard