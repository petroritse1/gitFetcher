import {React,useEffect} from 'react'
import {MapPin,Clock, Users,User} from "react-feather";
import {format} from "timeago.js";
import Loader from './Loader';

import {RiGitRepositoryLine} from 'react-icons/ri';
function Profile({userData,isLoading}) {
    if(userData === null) return;
     
    const {avatar_url,login,created_at,followers,following,location,public_repos,email,bio,name} = userData
    
     
    
    return (
       
        <article className="profile">
            { isLoading && <Loader/>  }
            <div className="profile__card">
                <div className="profile__img-box">
                    
                    <img src={avatar_url} alt="work" className="profile__img" />
                   
                </div>
                <div className="profile__text">
                    <h3 className="profile__name">{name}</h3>
                    <h5 className="profile__id">{login}</h5>

                </div>
                
                <div className="profile__bio">
                    {bio ? <p>{bio}</p>:<p>Am a fun guy||</p>}

                </div>
                <div className="profile__article">

                        <div className='profile__info' >
                        
                            {followers > 1 && <><span><Users/> </span> <p>{followers}</p> </> }
                            {followers === 1 && <><span><Users/> </span> <p>{followers}</p> </> }
                            {following > 0 && <><span><User/> </span> <p>{following}</p> </> }
                            
                        </div>
                        <div className='profile__info'>
                            {public_repos >= 1 && <> 
                            <span ><RiGitRepositoryLine className="profile__icon"/></span>
                            <p>
                            {public_repos} Repos 
                            </p>
                            </>}
                        </div>

                      
                        <div  className='profile__info'>
                            
                            {!location ?<><span><MapPin/> </span> <p>Earth</p> </>:<><span><MapPin/> </span> <p>{location}</p> </>}
                        </div>
                    <div  className='profile__info'>
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

export default Profile
