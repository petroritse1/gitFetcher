import React from 'react'
 
import { nanoid } from 'nanoid'
import RepoList from './RepoList'
import Profile from './Profile';
import Header from './Header';
import Form from './Form';
import { Link, Outlet,useLocation } from 'react-router-dom';
 
function Repo({children,setValue,onUsername,value,isLoading}) {
      const location = useLocation()
      const isPages = location.pathname === "/repo/page"
    return (
  <>    
       
        <div className="container">
             <Header>{!isPages &&<Form value={value} setValue={setValue} onUsername={onUsername} />}</Header>
            
            <div className="repo">

                <div className='repo__sidebar'>
                      {children}
                </div>
                 
                <div  className="repo__repo">
                     
                     <Outlet/>
                      
              
                </div>
                
                
            </div>
        </div>
  </>
        
    )
}

export default Repo
