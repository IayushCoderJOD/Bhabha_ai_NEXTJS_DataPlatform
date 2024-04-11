
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const sideBarButton = ({name,icon}:any) => {
  return (
    <li className="p-2 hover:bg-gray-400 hover:text-black rounded-xl w-fit items-center  flex items-left justify-start mt-6 ">
      <span className="mr-2 "><FontAwesomeIcon icon={icon} className="h-6"></FontAwesomeIcon></span>
      <span>{name}</span>
    </li>

  )
}

export default sideBarButton