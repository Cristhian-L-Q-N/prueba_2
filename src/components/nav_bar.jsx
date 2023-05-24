
import { AiOutlineHome, AiOutlineShop, AiOutlineShoppingCart, AiOutlineShopping, AiOutlineAreaChart, AiOutlineContacts, AiOutlineSisternode, AiOutlinePoweroff } from "react-icons/ai";
import "./nav_bar.css";
import options_nav_bar from './options_nav_bar.json';
import React from "react";

const HandleChange = (e) => {
    console.log(e.target.innerText)
}

export function NavBar() {

    return (
        <div className="Container">
            <h1 className="Name">TOP BURGER</h1>
            {
                options_nav_bar.map((OptionItem, index) => {
                    const IconComponent = eval(OptionItem.icon)
                    return (
                        <button className={`ContainerOption ${options_nav_bar.length - 1 === index ? "modified" : ""}`} key={index} onClick={HandleChange}>
                            {/* {React.createElement(OptionItem.icon, { className: "Icon" })} */}
                            <IconComponent className="Icon" />
                            <h2 className="Option">{OptionItem.option}</h2>
                        </button>
                    )
                }
                )
            }

        </div>
    )
}
