import React from 'react'
import { SlMagnifier } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";


import "./NavIcons.css"



const NavIcons = () => {
  return (
    <div>
   <div className='nav-icons'>
    <div  className='child-nav'><SlMagnifier/></div>
    <div className='child-nav'><CiHeart/></div>
    <div className='child-nav'><MdOutlineShoppingBag/></div>
    <div className='child-nav'><CiUser/></div>
    <div className='child-nav'><b>Eng</b></div>
    <div className='child-nav'><MdKeyboardArrowDown/></div>
</div>

    </div>
  )
}

export default NavIcons