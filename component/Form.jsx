import React from 'react'
import {useState} from "react"
// import { Link } from 'react-router-dom';
import Button from './Button';
import {FaMagnifyingGlass} from "react-icons/fa6"
import {useLocation} from "react-router-dom"



function Form({value,setValue,onUsername}) {
    const [disabled, setDisabled] = useState(false);
    const location = useLocation();
    // console.log(disabled)
    function onSubmit(e){
        e.preventDefault()
        if(!value)return;
        onUsername(value)
        
        if(location.pathname === "/repo/page" ){
            console.log("repo/page")
            setDisabled(true)
        }
    }

   
    return (
        <div>

                <form onSubmit={onSubmit}  >
                    <input type="text" placeholder="Enter username...." onChange={(e)=>{setValue(e.target.value)}} value={value} className="search"  disabled={disabled}/>
                    <Button style="btn" type="submit"
                    ><FaMagnifyingGlass/></Button>
                </form>
                
                
        </div>
    )
}

export default Form
