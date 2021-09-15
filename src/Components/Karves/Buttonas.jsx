function Buttonas(props) {
    return (
        <button id={props.id} onClick={props.knopkesFunkcija}>{props.knopke}</button>
    );
} 

export { Buttonas };