"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
const linkItems = [
  { href: "/HowToStartACall", label: "How to start a call" },
  { href: "/AboutUs", label: "About Us" },
  { href: "/Support", label: "Support" },
];

const Nav: React.FC = () => {
  return (
    <nav className="Poppins border-b border-b-black/20 rounded mx-auto px-10 lg:px-0 flex justify-between items-center lg:w-[90%] w-full ">
      
      <Logo />
        <ul className="text-mainTextColor lg:flex hidden p-1 gap-5 text-3xl justify-between font-semibold mt-3">
    
          {linkItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:bg-accentColor/60 p-2 rounded-xl transition-all"
            >
              <li>{item.label}</li>
            </Link>
          ))}
          <Link
            href={""}
            className=" bg-accentColor rounded-full p-1 hover:bg-secondAccent transition-all hover:text-secTextColor content-center"
          >
            Create a room
          </Link>
        </ul>
     

    <div className="block lg:hidden">
             ---<br></br>---
           </div>
         </nav>
  
  );
};

export default Nav;
