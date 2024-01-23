import React from "react";
import Pikachu from '../imgs/pikachu (1).png';

export default function NavBarPokedex(){
    return(
        <div>
            <nav class="navbar navbar-light bg-light justify-content-between px-3">
                <img className="navbar-brand" src={Pikachu} alt="Pikachu"></img>
                <form class="form-inline d-flex">
                    <p className="me-5">Home</p>
                    <p className="me-5">Estatísticas</p>
                </form>
            </nav>
        </div>
    )
}