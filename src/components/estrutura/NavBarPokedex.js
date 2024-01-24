import React from "react";
import Pikachu from '../imgs/pikachu (1).png';

export default function NavBarPokedex(){
    return(
        <div>
            <nav className="navbar bg-warning text-center d-flex justify-content-center">
                <img className="" src={Pikachu} alt="Pikachu"></img>
            </nav>
        </div>
    )
}