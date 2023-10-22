import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard_List({item}) {
    const {text,info,img} = item
    const isRepo = text === "Repo"
    const isError = text === "boundary"
    
    return (
      <div>
      <Outlet/>     
      
      {isRepo && <Link to="/repo/all"><div className="dashboard__card">
                        <div className="dashboard__img">{img}</div>
                        <div >
                        
                            <p className="dashboard__info">{info}</p>
                            <p className="dashboard__text">{text}</p>
                       </div>
               </div>
               </Link>
      }
               {!isError && !isRepo && <div className="dashboard__card">
                 <div className="">{img}</div>
                 <div  >
                
                <p className="dashboard__info">{info}</p>
               <p className="dashboard__text">{text}</p>
             </div>
                 </div>}
              {isError && <Link  onClick={()=><Header/>}><div className="dashboard__card">
                        <div className="dashboard__img">{img}</div>
                        <div >
                        
                            <p className="dashboard__info">{info}</p>
                            <p className="dashboard__text">{text}</p>
                       </div>
               </div>
               </Link>}</div>
    );
}

export default Dashboard_List
