import React from 'react'
import { Link } from 'react-router-dom';
import {format} from "timeago.js"
 

function RepoList({item,onSelectedName}) {
   
     const {name,created_at,visibility} = item
     
     
      
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
                    <div>
                        
                        <p>{format(created_at)}</p>
                    </div>
                    
                    
                </div>
     
    )
}

export default RepoList
