import React from 'react'
 
import { nanoid } from 'nanoid'
import RepoList from './RepoList'
import Profile from './Profile';
import Header from './Header';
import Form from './Form';
import { Link, Outlet } from 'react-router-dom';
 
function Repo({children,setValue,onUsername,value}) {
      
    
    return (
  <>
        <Header><Form value={value} setValue={setValue} onUsername={onUsername} /></Header>
        <div className="center">
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
