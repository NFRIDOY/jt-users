/**
 * UsersContainer
 * All Users are here to show cards
 */

import { useEffect, useState } from "react"
import UserCard from "../../components/UserCard/UserCard";


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
        <div className="py-20">
            {/* <h1>
                Users 
            </h1> */}
            <div className="mx-auto w-fit border-0">

                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
                    {
                        usersData?.map((user, index) => <UserCard key={user} user={user} index={index} />)
                    }
                </div>
            </div>
        </div>
    )
}
