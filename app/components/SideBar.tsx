'use client'
import { faBook, faDatabase, faGear, faMicrochip, faRightFromBracket, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarButton from "./SideBarButton";
import { useState } from "react";
import React from 'react'
import Link from "next/link";

const SideBar = () => {
  const [themeButtonLight, setThemeButtonLight] = useState(true);

  return (
    <div className={`static w-[16%] ${themeButtonLight ? 'bg-[#1b1a1a]' : 'bg-[#0d132e]'} rounded-r-xl h-screen shadow-2 xl text-white`}>
          <Link href={"/"}>
          <img className="w-fit opacity-85 p-3" src="/images/light_full_logo.webp" width={150} height={50} alt="Bhabha AI" />
          </Link>
          <div className="w-cover mt-24">
            <ul className="p-2 text-gray-300 font-medium text-xl pl-12 cursor-pointer">
                <Link href={"/dataset"} >  
              <li className="p-2 hover:bg-gray-400 hover:text-black rounded-xl w-fit pl-2 pr-2 flex items-left justify-start mt-7">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faDatabase} className="h-6" />
                </span>
                <span> Create Datasets</span>
              </li>
                </Link>
                <Link href={"/mydataset"} >  
              <li className="p-2 hover:bg-gray-400 hover:text-black rounded-xl w-fit pl-2 pr-2 flex items-left justify-start mt-7">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faDatabase} className="h-6" />
                </span>
                <span> My Datasets</span>
              </li>
                </Link>
              <SideBarButton name={"Models"} icon={faMicrochip} />
              <button onClick={() => {
                setThemeButtonLight(!themeButtonLight);
              }}>
                {
                  themeButtonLight === true ? (
                    <SideBarButton name={"Theme"} icon={faToggleOff} />
                  ) : (
                    <SideBarButton name={"Theme"} icon={faToggleOn} />
                  )
                }
              </button>
              <SideBarButton name={"T&C"} icon={faBook} />
              <SideBarButton name={"Settings"} icon={faGear} />
                <Link href="/logout" >
              <div className="absolute bottom-5">
                <SideBarButton name={"Signup/Signin"} icon={faRightFromBracket} />
              </div>
                </Link>
            </ul>
          </div>
        </div>
  )
}

export default SideBar