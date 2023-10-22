import {React,useEffect} from 'react'
import {MapPin,Clock, Users,User} from "react-feather";
import {format} from "timeago.js";
import Loader from './Loader';

import {RiGitRepositoryLine} from 'react-icons/ri';
function UserProfile({userData,isLoading}) {
    if(userData === null) return;
     
    const {avatar_url,login,created_at,followers,following,location,public_repos,email,bio,name} = userData
    
     
    
    return (
       
        <article className="userProfile">
            { isLoading && <Loader/>  }
            <div className="userProfile__card">
                <div className="userProfile__img-box">
                    
                    <img src={avatar_url} alt="work" className="userProfile__img" />
                   
                </div>
                <div className="userProfile__text">
                    <h3 className="userProfile__name">{name}</h3>
                    <h5 className="userProfile__id">{login}</h5>

                </div>
                <div>
                     {bio && <p>{bio}</p>}
                </div>
                <div className="userProfile__bio">
                    {bio ? <p>{bio}</p>:<p>Am a fun guy||</p>}

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
