import React from 'react'
 
import { Clock, Link } from 'react-feather';
import { format } from 'timeago.js';
import Language from './Language';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';
import {TbGitFork,} from "react-icons/tb"
import {BiGitRepoForked} from "react-icons/bi"
import {FaRegEye} from "react-icons/fa";
import {HiOutlineScale} from "react-icons/hi";



function SinglePage({repoData,userData,selectedName,isLoading}) {
    if (repoData === null) return;
    if (userData === null) return;
    const{description,name,visibility,updated_at,language,forks,html_url,watchers,licence,created_at} = repoData
    const {avatar_url,login} = userData

                           
    return (<>
            {isLoading && <Loader/>}
            <div className="single">
 
             <div className="single__header">
                   
                <div className="single__header-img">

                    <img src={avatar_url} className="single__img"/>
                    <p>{login}</p>
                </div>
                <div className="single__update">

                     <div className="single__time ">updated<p> <Clock className='single__icons'/></p><p > {format(updated_at)}</p></div>
                 
                </div>
             </div>
             <div className="single__body">

                        <p className="single__name">{description ?<p>{description}</p>:<p>{name} project</p>}</p>
                        <p className="single__socials">
                                <BiGitRepoForked className='single__icons'/>
                                <p>{forks} forks</p>

                                
                            </p>
                            <p className="single__socials">
                                <FaRegEye className='single_socials'/>
                                <p>{watchers}</p>
                            </p>
                            <p className="single__socials">
                                <HiOutlineScale className='single_socials'/>
                                {licence && <p>{licence} licence</p>}
                            </p>
                            <p>
                                <p className="single__socials">
                                    <Link className='single__icons'/>

                                    <a href={`${html_url}`} className="single__link" target="_blank"style={{

                                    }}> {html_url} </a>
                                </p>

                            </p>
                         <Language>{language}</Language>
                       

                    </div>
            </div>
      
    </>
    )
}

export default SinglePage
