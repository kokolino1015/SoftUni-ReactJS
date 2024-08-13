import { useState } from "react";

export default function UncontrolledForm() {
    const [user,setUser] = useState({});

    const formSubmitHandler = (e) => {
        const formData = new FormData(e.currentTarget);
        setUser({
            username: formData.get('username')
        })
    }

    const logoutHandler = (e) =>{
        setUser({});
    }

    return (
        <>
            <h1>Uncontrolled form</h1>
            {user.username 
                ? <p>Hello {user.username}! <button onClick={logoutHandler}>Logout</button></p> 
                : 
            
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"></input>
                </div>
                <div>
                    <input type="submit" value="Login"/>
                    <button></button>
                </div>
            </form>
            }
        </>
    );
}