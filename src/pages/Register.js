import React, { useState } from 'react'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
    <div>
        <h1>create account</h1>
        <form action="">
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username '/>
            <br />
            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password'/>
            <br />
            <button>Register</button>
        </form>
    </div>
    )
}

export default Register