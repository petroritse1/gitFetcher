import React, { useState } from 'react'

function TestError() {
    const [errorArray, setErrorArray] = useState(null)
    return (
        <div>
            {errorArray.map(error=> {
                return <h1>{error.name.test}</h1>
            })}
        </div>
    )
}

export default TestError
