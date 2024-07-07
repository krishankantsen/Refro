'use client'

import { AppStore, createStore } from '@/lib/store/store'
import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
// import {store} from "@/lib/store"

const StoreProvider=({children}:{children:ReactNode}) =>{
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
  
    storeRef.current = createStore()
  }
  return (
   <Provider store={storeRef.current}>
{children}
   </Provider>
  )
}

export default StoreProvider
