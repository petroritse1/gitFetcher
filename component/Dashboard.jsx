import React from 'react'
import DashboardList from './DashboardList'
import Profile from './Profile'
import {nanoid} from "nanoid";
 
import {Book,Code,Inbox,User,Users} from "react-feather";
// import {GoRepo } from "react-icons/go"


function Dashboard({userData}) {
     
    // getting the needed data from the list of  users data
    if(!userData) return;
    const isData = userData !== null
    const {public_gists,public_repos,followers,following} = userData
    const newUserData = [{
        info:public_repos,img:<p> 📗</p>
        ,text:"Repo"
    },
    ,
    {
        info:followers,img:<p> 👨‍👧‍👧</p>,text:"Followers"
    },
    {
        info:following,img:<p> &#128100;</p>,text:"Following"
    },
    {
        info:"Error",img:<p>❌</p>,text:"boundary"
    }
]
    
    return (
        <header>

            <nav className="dashboard center">
            {newUserData.map((item)=>{
                return(
                    <ul className='dashboard__list'> 
                        <li >
                                    <DashboardList key={ nanoid() } item={item}  />
                        
                        </li>
                    </ul>

            )})}
            
            </nav>
            {isData && <Profile userData={userData}/>}
        </header>
    )
}

export default Dashboard
