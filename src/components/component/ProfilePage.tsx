import { X } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

function ProfilePage(props:any) {
  return (
    <div className='w-screen h-screen z-100 relative bg-red-400'>
        hello i am krishank ant se
      <X className="cursor-pointer" onClick={()=>{props.setIsProfile(!props.isProfile)}}></X>
    </div>
  )
}

export default ProfilePage
