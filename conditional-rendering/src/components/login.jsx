import React from "react";
import Input from "./input";


function Login(){
    return <form className="form">
    <Input 
        type = "text"
        placeholder = "User Name"
    />
    <Input 
        type = "password"
        placeholder = "password"
    />
    <button type="submit">Login</button>
    </form>
    
}

export default Login;