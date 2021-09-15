function Karve(props) {
    return (
        <div className={props.klase} style={{backgroundColor: props.spalva}}>{props.spalva} {props.klase}</div>
    );
} 

export { Karve };