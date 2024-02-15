import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Routes = ["Home", "About", "Services", "Pricing", "Contact"];
export default function Nav() {


   const  [isMobileMenuShow , setIsMobileMenuShow]=useState(false)
  return (
    <nav className="flex flex-wrap items-center justify-between">
      {/* logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* hamburguer button */}
      <button 
      onClick={()=>setIsMobileMenuShow(!isMobileMenuShow)}
      className="lg:hidden p-2 rounded-lg focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu List */}
      <div className={`${isMobileMenuShow === false  && "hidden"}  w-full lg:w-auto lg:block`}>
        <ul className="flex flex-col lg:flex-row  lg:space-x-8 rounded-lg border border-gray-100 p-4  bg-gray-50 text-lg lg:bg-transparent lg:border-none">
          {Routes.map((route, i) => {
            return (
              <li
                className={` cursor-pointer px-3 py-2 ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* cart button */}
      <div className="fixed bottom-4 left-4 lg:static ">
        <div className=" flex-center rounded-full bg-white shadow-md h-12 w-12 ">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
