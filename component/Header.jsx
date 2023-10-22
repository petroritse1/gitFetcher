import React from 'react';
import img from './../src/assets/logo.png';
 
import Form from './Form';
 


function Header({children}) {
    return (
        <nav className="navbar">
            <div className="navbar__logo ">

                    <div className="navbar__img-box">

                    <img src={img}/>
                    </div>
             <h1  className="navbar__title">GitFetcher</h1>
            </div>
            {children}
              
             <p className='navbar__text'> Altschool Africa... </p>
            

        </nav>
    )
}

export default Header
