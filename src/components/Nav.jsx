import NikeLogo from "../assets/nike-logo.svg?react";
import {RxHamburgerMenu} from "react-icons/rx"
export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      {/* logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* hamburguer button */}
      <button className="p-2 rounded-lg focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
    </nav>
  );
}
