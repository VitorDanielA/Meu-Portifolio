import React, { useState } from "react";
import styles from './css/FormMultiStep.module.css';
import sidebarDesktop from './imgs/bg-sidebar-desktop.svg';
import Inserts from "./estrutura/Inserts";
import Steps from "./estrutura/Steps";
import Addons from "./estrutura/Addons";
import Arcade from './imgs/icon-arcade.svg';
import Advanced from './imgs/icon-advanced.svg';
import Pro from './imgs/icon-pro.svg';
import ModeloPlano from "./estrutura/ModeloPlano";
import Form from 'react-bootstrap/Form';

export default function FormMultiStep(){

    var etapaRender;

    const [etapa1, setEtapa1] = useState(true);
    const [etapa2, setEtapa2] = useState(false);
    const [etapa3, setEtapa3] = useState(false);
    const [etapa4, setEtapa4] = useState(false);

    const step1 = () =>{
        return(
            <div>
                <h3><strong>Personal Info</strong></h3>
                <p>Please, provide your name, email adress and phone number.</p>
                <Inserts titulo = 'Nome' placeholder = 'Vitor Daniel'/>
                <Inserts titulo = 'Email' placeholder = 'vdanielwork@gmail.com'/>
                <Inserts titulo = 'Telefone' placeholder = '+ 74 998153152'/>
                <div className="mt-5">
                    <button className={`${styles.btn} btn float-end mt-5`} onClick={() => {setEtapa2(true); setEtapa1(false)}}>Próxima Etapa</button>
                </div>
            </div>
        )
    }

    const step2 = () => {
        return(
            <div className="me-4">
                <h3 className={styles.titleStep}><strong>Select your plan</strong></h3>
                <p>You have the option of monthly or yearly billing.</p>
                <div className="d-flex justify-content-center mt-4">
                    <ModeloPlano icone = {Arcade} titulo = 'Arcade' preco = '$9/mo'/>
                    <ModeloPlano icone = {Advanced} titulo = 'Advanced' preco = '$12/mo'/>
                    <ModeloPlano icone = {Pro} titulo = 'Pro' preco = '$15/mo'/>
                </div>
                <div className={`${styles.switchContainer} d-flex justify-content-center mt-4 `}>
                    <p className="pe-3 fw-bolder">Monthly</p>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                    />
                    <p className="ps-3 fw-bolder">Yearly</p>
                </div>

                <div className="mt-5 d-flex justify-content-between">
                    <p className={`${styles.backP} mt-5 fw-bold`} onClick={() => {setEtapa1(true); setEtapa2(false)}}>Go Back</p>
                    <button className={`${styles.btn} btn float-end mt-5`} onClick={() => {setEtapa3(true); setEtapa2(false)}}>Next Step</button>
                </div>
            </div>
        )
    }

    const step3 = () => {
        return(
            <div className="me-5">
                <h3><strong>Picks add-ons</strong></h3>
                <p>Add-ons help enhance your gaming experience.</p>
                <Addons title = 'Online Service' description = 'Access to multiplayer games' price = '+$1/mo'/>
                <Addons title = 'Larger Storage' description = 'Extra 1 Terabyte of Cloud Save' price = '+$2/mo'/>
                <Addons title = 'Customizable Profile' description = 'Custom theme on your profile' price = '+$2/mo'/>

                <div className="mt-4 d-flex justify-content-between">
                    <p className={`${styles.backP} mt-5 fw-bold`} onClick={() => {setEtapa2(true); setEtapa3(false)}}>Go Back</p>
                    <button className={`${styles.btn} btn float-end mt-5`} onClick={() => {setEtapa4(true); setEtapa3(false)}}>Next Step</button>
                </div>
            </div>
        )
    }

    const step4 = () => {
        return(
            <div className="me-5">
                <h3><strong>Finishing up</strong></h3>
                    <p>Double-check everything looks OK before confirming</p>
                    <div className={`${styles.containerLastStep} mt-4 p-3`}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <strong>Arcade (Monthly)</strong>
                                <p>Change</p>
                            </div>
                            <p>$9/mo</p>
                        </div>
                        <hr></hr>
                        <div className="d-flex justify-content-between">
                            <p>Online Service</p>
                            <p>+$1/mo</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Larger Storage</p>
                            <p>+$2/mo</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-2">
                        <p>Total (per month)</p>
                        <strong>+$12/mo</strong>
                    </div>

                    <div className="mt-3 d-flex justify-content-between">
                        <p className={`${styles.backP} mt-5 fw-bold`} onClick={() => {setEtapa3(true); setEtapa4(false)}}>Go Back</p>
                        <button className={`${styles.btn} btn float-end mt-5`}>Confirm</button>
                    </div>
            </div>
        )
    }

    if(etapa1 === true) {
        etapaRender = step1();
    } else if (etapa2 === true) {
        etapaRender = step2();
    } else if (etapa3 === true) {
        etapaRender = step3();
    } else if (etapa4 === true) {
        etapaRender = step4();
    } else {
        etapaRender = <div>Etapa não encontrada</div>;
    }

    return(
        <div className={`${styles.body} d-flex justify-content-center align-items-center`}>
            <div className={`${styles.containerPrincipal} d-flex justify-content-around`}>
                <div className="" style={{position: 'relative'}}>
                    <img alt="sidebar" src={sidebarDesktop} className={`${styles.sidebar} mt-3 me-1`}></img>
                    <p className={styles.containerStepsMain}><Steps number = '1' step = 'STEP 1' info = 'YOUR INFO' verifyStep = {etapa1}/></p>
                    <p className={styles.containerStepsMain2}><Steps number = '2' step = 'STEP 2' info = 'SELECT PLAN' verifyStep = {etapa2}/></p>
                    <p className={styles.containerStepsMain3}><Steps number = '3' step = 'STEP 3' info = 'ADD-ONS' verifyStep = {etapa3}/></p>
                    <p className={styles.containerStepsMain4}><Steps number = '4' step = 'STEP 4' info = 'SUMMARY' verifyStep = {etapa4}/></p>
                </div>
                <div className="p-5 me-2">
                    {etapaRender}
                </div>
            </div>
        </div>
    )
}