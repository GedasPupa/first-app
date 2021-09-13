import { Kvadratas } from './Kvadratas.jsx';
// import ClassComponent from './ClassComponent.jsx';

const data = ['Rudasis', 'Juodasis', 'Brigada1'];

function App(props) {
    return (
        <>
        {data.map((b, index) => <Kvadratas key={index} bebras={b} />)}
        {/* <Kvadratas bebras="Juodasis" />
        <Kvadratas bebras="Rudasis" />
        <Kvadratas bebras="Brigadininkas" /> */}
        </>

    );
} 

export { App };

// namu darbas: github.com/A-Kija/vilkas 
// nuotrukas nupiesti su title. turi tureti responsive design