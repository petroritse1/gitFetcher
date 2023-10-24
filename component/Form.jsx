import React from 'react'
 
// import { Link } from 'react-router-dom';
import Button from './Button';
import {FaMagnifyingGlass} from "react-icons/fa6"



function Form({value,setValue,onUsername}) {
    function onSubmit(e){
        e.preventDefault()
        onUsername(value)
    }

   
    return (
        <div>

                <form onSubmit={onSubmit}  >
                    <input type="text" placeholder="Enter username...." onChange={(e)=>{setValue(e.target.value)}} value={value} className="search" />
                    <Button style="btn" type="submit"
                    ><FaMagnifyingGlass/></Button>
                </form>
                {/* { isData && <Dashboard userData={userData}/>}
                <div className={styles.content}>

                { isData && <User userData={userData}/>}
                <p>follower</p>
                </div> */}
        </div>
    )
}

export default Form
