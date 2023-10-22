import React from 'react'
// import Button from "./Button"
 

function ErrorFallback({error}) {
   
    return (
        <div className="error">
            <div className="error__banner">
                <div className="error__header">
                    Error
                </div>
                <p className="error__text">An error occured
                </p>
                {/* <Button onClick={()=>navigate(-1)}style="btn-next">back</Button> */}
            </div>
        </div>
    )
}

export default ErrorFallback
