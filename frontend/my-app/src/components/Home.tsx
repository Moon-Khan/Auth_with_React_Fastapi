import React, { useContext } from "react";
import { authContext } from "./AuthContext";

const Home = ()=>{
   
    const auth = useContext(authContext)

    const handleLogout=()=>{
        auth?.logout()
    }

    return(
        <div>
            <p>Home</p>
            <button type="submit" onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Home;
    