import React from 'react'
import {BiLogoJavascript,BiLogoPython,BiLogoHtml5,BiLogoCss3, BiCodeBlock} from "react-icons/bi"

function Language({children}) {
    const language = children 
   
    if(language === "JavaScript"){
        return(
            <>
            <p><BiLogoHtml5 className="card__language-html"/><BiLogoCss3 className="card__language-cs"/><BiLogoJavascript className="card__language-js"/> </p>
           
            </>
        )
    }
    else if(language === "Python"){
        return(<p><BiLogoPython  className="card__language-py" /></p>)
    }
    else if(!language){
        return(<p>💥  programmer</p>)
    }
    
    else{

        return(
            <p><BiCodeBlock className="card__language-program" /> {children} </p>
            )
        }
    }

export default Language
