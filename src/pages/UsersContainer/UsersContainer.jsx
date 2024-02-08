/**
 * UsersContainer
 * All Users are here to show cards
 */

import { useEffect, useState } from "react"


export default function UsersContainer() {

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            console.log(data?.users);
            setUsersData(data?.users);

        }
        getUsers();
    }, [])

    return (
        <div>
            <h1>
                UsersContainer
            </h1>
        </div>
    )
}
