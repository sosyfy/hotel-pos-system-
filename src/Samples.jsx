import React, { useEffect } from 'react'
import { useUserStore } from './stores/user.store'
import shallow from 'zustand/shallow'



function Samples() {
    const userDetails = useUserStore(state => state.userDetails)

    const [addUser, update, reset] = useUserStore(
        (state) => [state.addUser, state.update, state.reset],
        shallow
    )

    useEffect(()=> {
        const sample = {
            user: "Sospeter Karanja",
            type: "Admin",
            token: "dsfghjhgfgdfsdasfdgfhgj",
            appKey: "adsfdgfhgjhghfgdf",
            clientId: 2,
            roles: "Admin",
            expiry: "undefined", 
        }
        addUser(sample)
        
    },[])


    return (
        <div>Samples</div>
    )
}

export default Samples