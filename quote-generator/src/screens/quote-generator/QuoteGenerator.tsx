import { FC, useState } from "react";
import Headings from "../../components/heading/Heading";
import Buttons from "../../components/button/Button";
import "./QuoteGenerator.css"

const QuoteGenerator : FC = ()=>{

    const [data,setData]= useState<any>("");
    const [id,setId] = useState<number>(1) 

    const handleFetchData = async ()=>{
        try{
            const response = await fetch(`https://dummyjson.com/quotes/${id}`);
            const result = await response.json();
            setData(result)
            setId(id+1)

        }catch(ex){
            console.log(ex)
        }
    }
    return(

        <div className="container main">
            <div className="row content">
                <div className="content-data">
                    <Headings 
                        quote={data.quote} 
                        author={data.author}
                    />
                    <Buttons 
                        label={"Fetch New Data"} 
                        onClick={handleFetchData}
                    />
                </div>
            </div>
        </div>
    )
}
export default QuoteGenerator;