import create from 'zustand'
import { persist } from 'zustand/middleware'

const sample = {
    user: undefined,
    type: undefined,
    token: undefined,
    appKey: undefined,
    clientId: undefined,
    roles: undefined,
    expiry: undefined, 
}

export const useUserStore = create(
    persist(
      (set) => ({
        userDetails: sample,

        reset: () => {
            set({ userDetails: sample });
        },

        addUser:(data) => set({ userDetails: data }),

        update: ( field, value) =>
          set((state) => {
          const newUserDetails = {...state.userDetails };
          newUserDetails[field] = value;
            return {
              userDetails: newUserDetails,
            };
          }),
        }),
  
      {
        name: 'user-data', // unique name
      }
    )
  )


  export const useNav = create((set) => ({
    open: true,
    setOpen: (data) => set((state) => ({ open: data })),
  }))


