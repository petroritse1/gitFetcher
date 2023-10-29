import React from 'react'
import {  Link } from 'react-router-dom'
import {nanoid} from "nanoid";
import RepoList from './RepoList';


import Loader from './Loader';
import Button from './Button';
 

// A component that shows all the repo the user have


function AllRepo({allRepoData,onNext,onPrev,perPage,onSelectedName,isLoading}) {
    if (allRepoData === null) return;
    let allRepoDataLength = allRepoData.length
    console.log(allRepoDataLength)
   
    return (
        <>
         
        {isLoading && <Loader/>}    
        <div className="showing">
                <div className="card">
                    {allRepoData.map((item)=>{
                        return(
                            
                            <RepoList item={item} key={nanoid()} onSelectedName={onSelectedName} />
                             
                            )
                        })}
                </div>
                <div className="card__btns">

          {perPage >1 && allRepoDataLength > 0 &&<Button style="btn-next" onClick={onPrev}>prev</Button> }
          {allRepoDataLength > 2 &&<Button style="btn-next" onClick={onNext}>next</Button> }
                </div>
               
        </div>
        </>
    )
}

export default AllRepo
