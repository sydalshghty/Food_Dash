import "../css/header.css";
import FoodLogo from "../assets/Food-logo.svg";
import { GoSearch } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import NavbarMobile from "./navbar-mobile";
import "../css/navbar-mobile.css";
import { useState } from "react";
function Header(){
    const [showNav,setShowNav] = useState(true);
    return(
        <>
        <div className="header-departament w-full">
            <div className="container w-full h-full flex justify-between items-center">
                <div className="col-logo">
                    <img src={FoodLogo} alt="Food-Dash" />
                </div>
                <ul className="flex">
                    <li className="ml-10">
                        <a href="#" className="active">Home</a>
                    </li>
                    <li className="ml-10">
                        <a href="#">Menu</a>
                    </li>
                    <li className="ml-10">
                        <a href="#">Service</a>
                    </li>
                    <li className="ml-10">
                        <a href="#">About Us</a>
                    </li>
                </ul>
                <div className="col-search-cart">
                    <div className="col-search">
                        <GoSearch className="search-icon"/>
                    </div>
                    <div className="col-cart">
                        <LuShoppingCart className="cart-icon"/>
                    </div>
                    <div className="col-bars">
                        {showNav ? 
                            <FaBars className="bars-icon" onClick={ () => {
                                setShowNav(false);
                            }}/>
                            :
                            <FaXmark className="bars-icon" onClick={ () => {
                                setShowNav(true);
                            }}/>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className={`contentNavbar ${showNav ? "" : "show"}`}>
            <NavbarMobile/>
        </div>
        </>
    )
}
export default Header;