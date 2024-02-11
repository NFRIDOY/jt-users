/**
 * UsersContainer
 * All Users are here to show cards
 */

import { useEffect, useState } from "react"
import UserCard from "../../components/UserCard/UserCard";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function UsersContainer() {

    const [usersData, setUsersData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [searchArray, setSearchArray] = useState("");
    const [search, setSearch] = useState("");
    const [newUser, setNewUser] = useState({});
    



    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            console.log(data?.users);
            setUsersData(data?.users);

        }
        getUsers();
    }, [usersData])

    const [sortedData, setSortedData] = useState([...usersData]);
    const [sortBy, setSortBy] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search);

        console.log(search);

        // const margeName = usersData.map((user) => user.firstName + user.lastName)
        // console.log(margeName);
        const searchArray = usersData.filter((user) => ((user.firstName.toLowerCase() === search.toLowerCase()) || (user.lastName.toLowerCase() === search.toLowerCase())))
        console.log(searchArray);
        setFilter(searchArray);
        // if (search !== "") 
    }

    const sortData = (criteria) => {
        const sorted = [...usersData].sort((a, b) => {
            if (criteria === 'name') {
                return a?.firstName.localeCompare(b?.firstName);
            } else if (criteria === 'email') {
                return a?.email.localeCompare(b?.email);
            } else if (criteria === 'company') {
                return a?.company?.name.localeCompare(b?.company?.name);
            }
            return 0;
        });
        setSortedData(sorted);
        setSortBy(criteria);
    };

    return (
        <div className="py-20 max-w-[1200px] mx-auto">
            <div className="mx-auto w-full flex justify-between items-center">
                <form onSubmit={handleSearch} className=" my-5 flex gap-2 border-0">
                    <input onKeyUp={handleSearch} type="text" name="search" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> <button className="btn btn-accent text-white"><FaSearch /></button>
                </form>
                <Link to={"/addUser"} className="btn btn-accent text-white">
                    Add New User
                </Link>
                <div>
                    {/* <label htmlFor="sort">Sort by:</label> */}
                    <select
                        id="sort"
                        onChange={(e) => sortData(e.target.value)}
                        value={sortBy || ''}
                        className="select select-bordered border-2 border-accent w-full max-w-xs"
                    >
                        <option value="">Select Sorting Option</option>
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="company">Company</option>
                    </select>
                </div>
            </div>
            <div className="mx-auto w-fit border-0">

                {
                    sortBy === "" ? <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
                        {
                            search === "" ? usersData?.map((user, index) => <UserCard key={user} user={user} index={index} />) : filter?.map((user, index) => <UserCard key={user} user={user} index={index} />)
                        }
                    </div> : <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
                        {
                            search === "" ? sortedData?.map((user, index) => <UserCard key={user} user={user} index={index} />) : filter?.map((user, index) => <UserCard key={user} user={user} index={index} />)
                        }
                    </div>
                }

            </div>
        </div>
    )
}
