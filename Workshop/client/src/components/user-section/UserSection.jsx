import { useEffect, useState } from "react";
import Search from "../search/Search";
import Pagination from "./pagination/Pagination";
import UserList from "./user-list/UserList";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails";
import UserDelete from "./user-delete/UserDelete";

const baseUrl = "http://localhost:3030/jsonstore"

export default function UserSection(props) {

    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAdduser] = useState(false);
    const [showUserByID, setShowUserByID] = useState(null);
    const [showUserDelete, setUserDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`)
                const result = await response.json();
                const users = Object.values(result);
                setUsers(users);
                
            }
            catch (error) {
                alert(error.message)
                
            }
            finally{
                setIsLoading(false);
            }
        })();
    }, [])

    const addUserClickHandler = () => {
        setShowAdduser(true);
    }
    const addUserCloseHandler = () => {
        setShowAdduser(false)
    }
    const addUserSaveHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const response = await fetch(`${baseUrl}/users`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        const responseData = await response.json()

        setUsers(oldUsers => [...oldUsers, createdUser])

        setShowAdduser(false)
    }
    const userDetailsClickHandler = (userId) => {
        setShowUserByID(userId)
    }
    const hideUserDetailsClickHandler = () => {
        setShowUserByID(null)
    }
    const userDeleteClickHandler =  (userId) => {

        setUserDelete(userId)
        
    }
    const userDeleteHandler = async(userId)=> {
        const response = await fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE'
        })

        setUsers(oldUsers => oldUsers.filter(user => user._id !== userId))

        setUserDelete(null)
    }
    const onSearchHandler = (email) => {

    }
    return (<>
        <section className="card users-container">

            <Search />

            <UserList users={users} onUserDetailsClick={userDetailsClickHandler} onUserDeleteClick={userDeleteClickHandler} isLoading={isLoading} />
            {showUserByID && <UserDetails onClose={hideUserDetailsClickHandler} user={users.find(user => user._id == showUserByID)} />}
            {showAddUser && <UserAdd onSave={addUserSaveHandler} onClose={addUserCloseHandler} />}
            {showUserDelete && <UserDelete onClose={() => setUserDelete(null)} onUserDelete={userDeleteHandler(showUserDelete)} />}
            {/* <!-- New user button  --> */}
            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>


            <Pagination />
        </section>
    </>
    )
}