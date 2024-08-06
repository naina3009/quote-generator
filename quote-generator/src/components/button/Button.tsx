import { FC } from "react";
import "./Button.css"

interface IButtons{
    label : string,
    onClick ?:(e:any)=>void;
}
const Buttons : FC<IButtons> = (props:any)=>{
    const {label,onClick} = props;
    return(
        <button className="beautiful-button" onClick={onClick}>
            {label}
        </button>
    )
}
export default Buttons