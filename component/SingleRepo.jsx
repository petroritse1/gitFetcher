import React from 'react'
import styles from './SingleRepo.module.css' 
import { Clock, Link } from 'react-feather';
import { format } from 'timeago.js';
import Language from './Language';
import { NavLink } from 'react-router-dom';
import {TbGitFork,} from "react-icons/tb"
import {BiGitRepoForked} from "react-icons/bi"

function SinglePage({repoData,userData,selectedName}) {
    if (repoData === null) return;
    if (userData === null) return;
    const{description,name,visibility,updated_at,language,forks,html_url} = repoData
    const {avatar_url,login} = userData
    return (
        <div  
        
        >
            <div className="single">
 
             <div className="single__header">
                   
                <div className={styles.header__img}>

                    <img src={avatar_url} className={styles.img}/>
                    <p>{login}</p>
                </div>
                <div className={styles.time}><p><Clock/></p><p>{format(updated_at)}</p></div>
                 
             </div>
             <div className="single__body">

                        <p className="single__name">{description ?<p>{description}</p>:<p>{name} project</p>}</p>
                        
                        
                        <p className="single__socials">
                                <BiGitRepoForked className='single__icons'/>:
                                <p>{forks}</p>

                                
                            </p>
                            <p>
                            <p className="single__socials">
                                <Link className='single__icons'/>

                                <NavLink to={html_url} className="single__link">{html_url} </NavLink>
                            </p>

                        </p>
                        {language === "JavaScript"?
                        <>
                        <p><Language/>Html and css</p>
                        <p><Language/>{language}</p>
                        </>
                        :language && <p><Language/>{language}</p>}
                        {!language && <p><Language/> programmer</p> }
                       

                    </div>
            </div>
        </div>
    )
}

export default SinglePage
