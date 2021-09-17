function Karve(props) {
    return (
        <div className={props.klase} style={{backgroundColor: props.spalva}}>
            <span>{props.id}</span>
            <span>{props.klase}</span>
            <button onClick={()=>props.istrinkKarve(props.id)}>Delete</button>
            <button onClick={()=>props.nuspalvinkKarve(props.id, props.spalva1)}>Update</button>
        </div>
    );
} 

export { Karve };