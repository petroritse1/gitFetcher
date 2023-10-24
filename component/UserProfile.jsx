import {React,useEffect} from 'react'
import {MapPin,Clock, Users,User} from "react-feather";
import {format} from "timeago.js";
import Loader from './Loader';
import {FcImageFile} from "react-icons/fc"

import {RiGitRepositoryLine} from 'react-icons/ri';
import Language from './Language';
function UserProfile({userData,isLoading}) {
    if(userData === null) return;
     
    const {avatar_url,login,created_at ,location,public_repos,bio,name,emoji} = userData
    
     
    
    return (
       
        <article className="userProfile">
            { isLoading && <Loader/>  }
            <div className="userProfile__card">
                <div className="userProfile__img-box">
                    
                    <img src={avatar_url ? avatar_url:FcImageFile} alt="work" className="userProfile__img" />
                   
                </div>
                <div className="userProfile__text">
                    <h3 className="userProfile__name">{name ? name :"Github user"}</h3>
                    <h5 className="userProfile__id">{login ?login:"Github login"}</h5>

                </div>
                <div className='userProfile__emoji'>
                     {emoji ? <p>{emoji}</p>:<p>🧛‍♀️</p>}
                </div>
                <div className="userProfile__bio">
                    {bio ? <p>{bio}</p>:<p>I love computer<Language/></p>}

                </div>
                <div className="userProfile__border"></div>
                <div className="userProfile__article">

                        
                        <div className='userProfile__info'>
                            {public_repos >= 1 && <> 
                            <span ><RiGitRepositoryLine className="userProfile__icon"/></span>
                            <p>
                            {public_repos} Repos 
                            </p>
                            </>}
                        </div>

                      
                        <div  className='userProfile__info'>
                            
                            {!location ?<><span><MapPin/> </span> <p>Earth</p> </>:<><span><MapPin/> </span> <p>{location}</p> </>}
                        </div>
                    <div  className='userProfile__info'>
                            <><span><Clock/> </span>  
                                    <p>
                                        {format(`${created_at}`,"en_US")}
                                    </p>
                            </>
                        
                    </div>
                </div>
                </div>
        </article>
         
         
    )
}

export default UserProfile
