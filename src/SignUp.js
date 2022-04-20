import React, { useState } from 'react'
import './SignUp.css'
import { API, graphqlOperation } from 'aws-amplify'
import { createUser, updateUser, deleteUser } from './graphql/mutations'

async function table(){
    const user = { name: "user name", email: "nam123@gmail.com"};
    await API.graphql(graphqlOperation(createUser, { input: user }))
    console.log("creating user")
}

export default function SignUp() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    return (

        <>
        {console.log(user)}
            <div className="login__text">
                <h1> Signup</h1>
            </div>
            <form >
                <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange} />
                <input type="text" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} />
                <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} />
                <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Confirm password" onChange={handleChange} />
                <button type="submit" onClick={table} >Signup</button>
                <p> Forget password</p><p> Term and conditions</p>
            </form>
        </>

    )
}
