import NumberBTN from './NumberBTN.jsx'
import '../styles/Botonera.css'

function Botonera (props) {
    return (
        <>
            <div className="botonera">
                <NumberBTN updateData={props.callback} color="#646cffdd" hoverColor="#646cff" content="C" special="true"/>
                <NumberBTN updateData={props.callback} content="sqrt"/>
                <NumberBTN updateData={props.callback} content="("/>
                <NumberBTN updateData={props.callback} content=")"/>

                <NumberBTN updateData={props.callback} content="7"/>
                <NumberBTN updateData={props.callback} content="8"/>
                <NumberBTN updateData={props.callback} content="9"/>

                <NumberBTN updateData={props.callback} content="/"/>

                <NumberBTN updateData={props.callback} content="4"/>
                <NumberBTN updateData={props.callback} content="5"/>
                <NumberBTN updateData={props.callback} content="6"/>

                <NumberBTN updateData={props.callback} content="*"/>

                <NumberBTN updateData={props.callback} content="1"/>
                <NumberBTN updateData={props.callback} content="2"/>
                <NumberBTN updateData={props.callback} content="3"/>

                <NumberBTN updateData={props.callback} content="-"/>

                <NumberBTN updateData={props.callback} content="0"/>
                <NumberBTN updateData={props.callback} content="."/>
                <NumberBTN updateData={props.callback} content="^"/>
                <NumberBTN updateData={props.callback} content="+"/>

                <NumberBTN updateData={props.callback} content="=" special="true" fill="full-wide"/>
            </div>
        </>
    )
}

export default Botonera
