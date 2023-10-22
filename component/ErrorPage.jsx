import React from 'react'
import {useNavigate} from "react-router-dom"
import Button from './Button'

function ErrorPage() {
    const navigate = useNavigate()
    return (
        <div className="error">
            <div className="error__banner">
                <div className="error__header">
                    404
                </div>
                <p className="error__text">Oopsie something happened click to go back
                </p>
                <Button onClick={()=>navigate(-1)}style="btn-next">back</Button>
            </div>
        </div>
    )
}

export default ErrorPage
