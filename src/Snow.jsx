import {useState} from "react";


// const styleName = {
//     left: Math.random() * 100 + "px",
//     width:Math.random() * 100 + "px",
//     height:Math.random() * 50 + "px",
//     animationDelay: `${Math.floor(Math.random() * 3)}s`,
//     borderRadius:50%

// };

function SnowFlake(){
    return(
        <div className="snow-wrapper">

        {        Array.from({ length: 10 }, (_, i) => 
                
                    
                    <div className="snow"    key={i}>
                            
                    </div>
                )
        }

        </div>
    )
}

export default SnowFlake;