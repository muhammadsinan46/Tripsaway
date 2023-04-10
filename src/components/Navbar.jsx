import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaBars,
} from "react-icons/fa";

function Navbar() {
 const [side, setSide] = useState(false);

 const handleSidebar =()=>{
   setSide(!side)
 }


  const NavMenu = [
    {
      id: 1,
      title: "Home",
      path: "#home",
    },
    {
      id: 2,
      title: "Deals",
      path: "#deals",

    },
    {
      id: 3,
      title: "Gallery",
      path: "#gallery",

    },
    {
      id: 4,
      title: "Contact",
      path: "#contact",
    },
  ];
  return (
    <div className="w-full min-h-[50px] flex items-center justify-between absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
          {NavMenu.map(({ id, title, path }) => (
        <li key={id}>
            <a href={path}>
              {title}
            </a>
        </li>
          )
          )}
      </ul>
      <div onClick={handleSidebar} className="sm:hidden z-10">
        <FaBars size={20} className="ml-4 cursor-pointer" />
      </div>
       {/* Mobile view */}
       <div onClick={handleSidebar} className={side ? 
       'overflow-hidden-y md:hidden ease-in duration-500 absolute h-screen w-60 left-0 top-0 text-gray-300  bg-black/90 px-4 py-7 flex flex-col'
      : 'absolute  top-0 h-screen left-[-100%] ease-in duration-500 '}>
        <ul className="w-full h-full text-center pt-12">
            {NavMenu.map(({ id, title, path }) => (
          <li className="text-2l py-8" key={id}>
              <a href={path}>
                {title}
              </a>
          </li>
            ))}
        </ul>
      </div>

      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaInstagram className="mx-4" />
        <FaYoutube className="mx-4" />
      </div>
   
     
    </div>
  );
}

export default Navbar;
