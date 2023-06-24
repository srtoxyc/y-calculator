import React from 'react'
import { useState, useEffect } from 'react'
import { compile, evaluate } from 'mathjs'

import Botonera from './Botonera.jsx'
import Screen from './Screen.jsx'
import MessageBox from './MessageBox.jsx'

import '../styles/Calculadora.css'

function Calculadora () {
    const PLUS_CHAR          = '+';
    const MINUS_CHAR         = '-';
    const TIMES_CHAR         = 'x';
    const DIVISION_CHAR      = '/';
    const MODULUS_CHAR       = '%';
    const SQRT_CHAR          = 'sqrt';
    const FPOINT_CHAR        = '.';
    const POW_CHAR           = '^';
    const RESET_CHAR         = 'C';
    const CALCULATE_CHAR     = '=';

    const DELETE_KEY         = "Backspace";
    const ENTER_KEY          = "Enter";
    const SQRT_KEY           = "º";
    const RESET_KEY          = "c";
    const POW_KEY            = "Dead";

    const [data, setData]    = useState('');

    const CALC_REGEX         = /^[+\-\/x%.0-9\(\)\*]+$/;
 
    useEffect(() => {
        function handleKeyPress(event) {
            if(CALC_REGEX.test(event.key)) {
                setData((prevData) => prevData + event.key);
            } else if(event.key === DELETE_KEY) {
                setData((prevData) => prevData.slice(0, -1));
            } else if(event.key === ENTER_KEY) {
                setData((prevData) => {calculate(prevData)});
            } else if(event.key === SQRT_KEY) {
                setData((prevData) => prevData + SQRT_CHAR + "(");
            } else if(event.key === RESET_KEY) {
                setData("");
            } else if(event.key === POW_KEY) {
                setData((prevData) => prevData + POW_CHAR);
            } else {
                console.log(event.key);
            }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    function calculate(operation) {
        try {
            setData(`${operation} ${CALCULATE_CHAR} ${compile(operation).evaluate()}`);
        } catch(e) {
            console.error("La operación no ha sido formulada correctamente.");
            setData("");
        }
    }

    function setElement(content) {
        switch(content) {
            case RESET_CHAR:
                setData("");
                break;
            case CALCULATE_CHAR:
                calculate(data);
                break;
            case SQRT_CHAR:
                setData(data + SQRT_CHAR + "(");
                break;
            default:
                setData(data + content);
                break;
        }
    }

    return (
        <>
            <div className="calc">
                <Screen className="screen" data={data}/>
                <Botonera className="botonera" callback={setElement} />
            </div>

            <MessageBox />
        </>
	)
}

export default Calculadora
