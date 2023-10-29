import React from 'react';
import img from './../src/assets/logo.png';

 
import {Link} from "react-router-dom";
 


function Header({children}) {
    return (
        <nav className="navbar">
            <Link to="/">
                <div className="navbar__logo ">

                        <div className="navbar__img-box">

                        <img src={img} className='navbar__img'/>
                        </div>
                <h1  className="navbar__title">GitFetcher</h1>
                </div>
        </Link>
            {children}
              
             <p className='navbar__text'>ALT/SOE/023/0611 </p>
            

        </nav>
    )
}

export default Header
