import { Element } from './element.jsx';
import ClassComponent from './ClassComponent.jsx';

function App(props) {
    return (
        <>
        <Element name={'Petras'} surname={'Petraitis'} per={props.per} />
        <ClassComponent name={'ClassssssComponent'}/>
        </>

    );
} 

export { App };