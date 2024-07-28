import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ]
  return (
    <div className=" top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      <div className="w-[11vw] h-full text-primary font-bold flex justify-start items-center text-lg"> 
         <img src="https://ik.imagekit.io/hal1hunt/Home/Screenshot_2024-07-25_191002-removebg-preview.png"/>
      </div>
      <div className='w-[80vw] h-full font-bold flex flex-row justify-end items-center gap-8'>
      
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar