import { FC } from "react";
import "./Heading.css"

interface IHeadings {
    className ?: string
    author : string
    quote : string
}
const Headings : FC<IHeadings> = (props:any)=>{
    const {author,quote,className} = props
    return(
    
        <div className={`card ${className}`}>
            <p className="card-title">
                {author}
            </p>
            <p className="small-desc">
               {quote}
            </p>
            <div className="go-corner">
                <div className="go-arrow">→</div>
            </div>
        </div>
    )
}
export default Headings