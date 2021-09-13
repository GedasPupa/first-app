// import { person } from "../Data/person";

function Element(props) {
    return (
        <>
          <h1>Hello, BEBRAS!</h1>
          <small>labas Lape { 5 + 16 }</small><br></br>
          <big>labas { props.name + ' ' + props.surname } megsta sokineti per {props.per}</big>
        </>
    );
} 

export { Element };