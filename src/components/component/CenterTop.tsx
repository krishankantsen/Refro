'use client'
import { useAppSelector } from '@/lib/store/hooks';
import React from 'react'
import { CreateSearchPost } from './create-search-post';


function CenterTop() {
    const user = useAppSelector((state) => state.auth.user);
  return (
    user?.role=="Placed"?<CreateSearchPost/>:""
  )
}

export default CenterTop
