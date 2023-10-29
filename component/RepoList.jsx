import React from 'react'
import { Link } from 'react-router-dom';
import {format} from "timeago.js"
import Language from './Language';
import {BiLogoJavascript,BiLogoPython,BiLogoHtml5,BiLogoCss3, BiCodeBlock} from "react-icons/bi"
 

function RepoList({item,onSelectedName}) {
   
     const {name,visibility,language} = item
     
     
      
    return (
         

                <div className="card__body">
                    <div className="card__header">

                        <div className= "card__title">
                            <span>📗 </span>
                                <Link to="/repo/page"  className="card__name" onClick={()=>onSelectedName(name)}>{name}</Link>
                        </div>
                            <p className="card__visibility">{visibility}</p>

                    </div>
                    <div>
                     
                            <p>Starter files for {name} project</p>
                    </div>
                    <div className="card__language">
                       
                   
                        <Language>{language}</Language>
                    </div>
                    
                    
                </div>
     
    )
}

export default RepoList
