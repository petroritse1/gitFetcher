import React from 'react'

function Footer() {
    const date = new Date()
    return (
        <footer  className="footer">
             <div className="footer__text">An Alt-school project built by <a target="_blamk" href="https://github.com/petroritse1" className='footer__link'>Onigbinde peter</a>  &copy; {date.getFullYear()}</div>
        </footer>
    )
}

export default Footer
