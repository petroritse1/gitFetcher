import React from 'react'
import DashboardList from './DashboardList'
import Profile from './Profile'
import {nanoid} from "nanoid";
 
import {Book,Code,Inbox,User,Users} from "react-feather";
import UserProfile from './UserProfile';
// import {GoRepo } from "react-icons/go"


function Dashboard({userData}) {
     
    // getting the needed data from the list of  users data
    if(!userData) return;
    const isData = userData !== null
    const {public_gists,public_repos,followers,following} = userData
    let followersCount = followers.toString()
    let followingCount = following.toString()
    
    if(followers.toString().length=== 4){
    //    
        followersCount = `${followersCount.substring(0, 1)}K`
        followingCount = `${followingCount.substring(0, 1)}K`
    }
    else if(followers.toString().length === 5){
        
         
        followersCount = `${followersCount.substring(0, 2)}K`
        followingCount = `${followingCount.substring(0, 2)}K`
    }
    else if(followers.toString().length=== 6){
        followersCount = `${followersCount.substring(0, 1)}M`
        followingCount = `${followingCount.substring(0, 1)}M`
       
    }
    else if(followers.toString().length=== 7){
        followersCount = `${followersCount.substring(0, 2)}M`
        followingCount = `${followingCount.substring(0, 2)}M`
        
    }
    else{
        followersCount = followers
        followingCount = following
    }

    const newUserData = [{
        info:public_repos,img:<p> 📗</p>
        ,text:"Repo"
    },
    ,
    {
        info:followersCount,img:<p> 👨‍👧‍👧</p>,text:"Followers"
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

            <div className="dashboard">
            {newUserData.map((item)=>{
                return(
                    <ul className='dashboard__list'> 
                        <li >
                                    <DashboardList key={ nanoid() } item={item}  />
                        
                        </li>
                    </ul>

            )})}
            
            </div>
            {isData && <UserProfile userData={userData}/>}
        </header>
    )
}

export default Dashboard
