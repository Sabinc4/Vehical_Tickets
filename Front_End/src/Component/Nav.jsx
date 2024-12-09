import { useState} from "react";
import {Link} from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";


const Nav=()=> {
    const[click,setclick]=useState(false);
    const handleClick= () => setclick(!click);
    const content=<>

    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition ">
        <ul classname="text-center text-xl p-20">
            <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded  ">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded  ">About</li>
            </Link>
            <Link spy={true} smooth={true} to="Bookings">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded  ">Bookings</li>
            </Link>
            <Link spy={true} smooth={true} to="Sign-In">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded  ">Sign-In</li>
            </Link>
            <Link spy={true} smooth={true} to="Register">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded  ">Register</li>
            </Link>
        </ul>
    </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 ">
                <div className="flex items -center flex-1">
                    <span className="text-3xl font-bold">Logo</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link spy={true} smooth={true} to="Home">
                        <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer  ">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                        <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer  ">About</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Bookings">
                        <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer  ">Bookings</li>
                        </Link>
                        <Link spy={true} smooth={true}to="Sign-In">
                        <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer  ">Sign-In</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Register">
                        <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer  ">Register</li>
                        </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuBurger /> }
                </button>
            </div>
        </nav>
    );
  };
  
  export default Nav;