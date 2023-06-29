import '../styles/Screen.css'

function Screen (props) {
    return (
        <>
            <div className="screen">
                <h4>{props.data}</h4>
            </div>
        </>
    )
}

export default Screen
