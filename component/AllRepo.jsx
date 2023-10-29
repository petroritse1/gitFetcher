import React from 'react'
import {  Link } from 'react-router-dom'
import {nanoid} from "nanoid";
import RepoList from './RepoList';
 

import Loader from './Loader';
import Button from './Button';
import Header from './Header';
import Form from './Form';


function AllRepo({allRepoData,onNext,onPrev,perPage,onSelectedName,isLoading}) {
    if (allRepoData === null) return;
    let allRepoDataLength = allRepoData.length
   
    return (
        <>
         
        <div className="showing">
                 {isLoading && <Loader/>}    
                <div className="card">
                    {allRepoData.map((item)=>{
                        return(
                            
                            <RepoList item={item} key={nanoid()} onSelectedName={onSelectedName} />
                             
                            )
                        })}
                </div>
                <div className="card__btns">

          {perPage >1 && allRepoDataLength > 0 &&<Button style="btn-next" onClick={onPrev}>prev</Button> }
          {allRepoDataLength >1 &&<Button style="btn-next" onClick={onNext}>next</Button> }
                </div>
               
        </div>
        </>
    )
}

export default AllRepo
