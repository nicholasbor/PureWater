import React from "react";
import Logo from '../Images/logo.png'

function Header() {
    return (
        <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <nav className="container flex items-center py-4 mt-4 sm:mt-12">
                <div className="py-1">
                    <img src={Logo} alt="" />
                </div>
                <ul className="hidden sm:flex flex-1 justify-end item-center align-middle gap-12 text-black uppercase text-xs">
                    <li className="cursor-pointer pt-2 text-lg">About Us</li>
                    <li className="cursor-pointer pt-2 text-lg">Our Modules</li>
                    <li className="cursor-pointer pt-2 text-lg">Contact Us</li>
                    <button type="button" className="btn bg-blue-400 text-white text-lg hover:bg-gray-300 hover:text-black text-md rounded-md px-7 py-3 uppercase">Login</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end">
                <i class="text-3xl fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;