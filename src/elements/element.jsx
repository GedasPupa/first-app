import { person } from "../Data/person";

const element = (
    <>
      <h1>Hello, BEBRAS!</h1>
      <small>labas Lape { 5 + 16 }</small><br></br>
      <big>labas { person.name + ' ' + person.surname }</big>
    </>
);

export { element };