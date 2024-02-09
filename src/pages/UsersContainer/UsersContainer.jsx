/**
 * UsersContainer
 * All Users are here to show cards
 */

import { useEffect, useState } from "react"
import UserCard from "../../components/UserCard/UserCard";
import { FaSearch } from "react-icons/fa";


export default function UsersContainer() {

    const [usersData, setUsersData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [searchArray, setSearchArray] = useState("");
    const [search, setSearch] = useState("");



    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            console.log(data?.users);
            setUsersData(data?.users);

        }
        getUsers();
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search);

        console.log(search);

        const searchArray = usersData.filter((user) => user.firstName.toLowerCase() === search.toLowerCase());
        console.log(searchArray);
        setFilter(searchArray);
        // if (search !== "") 
    }

    return (
        <div className="py-20">
            <form onSubmit={handleSearch} className="mx-auto my-5 w-fit flex gap-2 border-0">
                <input type="text" name="search" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> <button className="btn btn-warning"><FaSearch /></button>
            </form>
            <div className="mx-auto w-fit border-0">

                <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
                    {
                        search === "" ? usersData?.map((user, index) => <UserCard key={user} user={user} index={index} />): filter?.map((user, index) => <UserCard key={user} user={user} index={index} />)
                    }
                </div>
            </div>
        </div>
    )
}
