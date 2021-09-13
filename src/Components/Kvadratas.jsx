import { Bebras } from "./Bebras";
import { ClassBebras } from "./ClassBebras";

function Kvadratas(props) {
    if (props.bebras === 'Brigada1') {
        return (
            <>
            <div className="kvadratas">
                <b>< Bebras bebras={props.bebras} /></b>
            </div>
            < ClassBebras bebras={props.bebras} />
            </>
        );
    }
    
    return (
        <>
        <div className="kvadratas">
            < Bebras bebras={props.bebras} />
        </div>
        </>
    );
} 

export { Kvadratas };