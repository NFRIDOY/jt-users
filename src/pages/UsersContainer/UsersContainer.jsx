/**
 * UsersContainer
 * All Users are here to show cards
 */

import { useEffect, useState } from "react"
import UserCard from "../../components/UserCard/UserCard";
import { FaSearch } from "react-icons/fa";

import AddUser from "../AddUser/AddUser";
import NoDataFound from "../../components/NoDataFound/NoDataFound";


export default function UsersContainer() {

    const [usersData, setUsersData] = useState([]);
    const [filter, setFilter] = useState(null);
    const [search, setSearch] = useState("");
    const [newUser, setNewUser] = useState([]);


    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            console.log(data?.users);
            setUsersData(data?.users);

        }
        getUsers();
    }, [sortBy])

    const [sortedData, setSortedData] = useState([...usersData]);


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

    // const handleSearchOnBlur = () => {
    //     alert("Please Clear The Search and Click again The Search Button Or Refresh")
    // }
    /**
     * @param {sortType like name, email, company}
     * newUser is concat with Userdate theke it has been spread(...) then sort by sortType.
     * .localeCompare is a method to compare alphabetically
     */
    const sortData = (sortType) => {
        const sorted = [...usersData.concat(newUser)].sort((a, b) => {
            if (sortType === 'name') {
                return a?.firstName.toLowerCase().localeCompare(b?.firstName.toLowerCase());
            } else if (sortType === 'email') {
                return a?.email.localeCompare(b?.email);
            } else if (sortType === 'company') {
                return a?.company?.name.toLowerCase().localeCompare(b?.company?.name.toLowerCase());
            }
            return 0;
        });
        setSortedData(sorted);
        setSortBy(sortType);
    };

    

    return (
        <div className="py-20 lg:max-w-[1200px] mx-auto">
            <div className="mx-auto w-full mb-8 flex flex-col md:flex-row lg:flex-row justify-between items-center">
                <form onSubmit={handleSearch} className=" my-5 flex gap-2 border-0">
                    <input type="text" name="search" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> <button className="btn btn-accent text-white"><FaSearch /></button>
                </form>
                {/* <Link to={"/addUser"} className="btn btn-accent text-white">
                    Add New User
                </Link> */}

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
                    // sortBy === "" ? <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-2 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
                    sortBy === "" ? <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-2 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 relative">
                        {
                            search === "" ? usersData.concat(newUser)?.map((user, index) => <UserCard key={user} user={user} index={index} />) : filter?.length !== 0 ? filter.concat(newUser)?.map((user, index) => <UserCard key={user} user={user} index={index} />) : <NoDataFound />
                        }
                    </div> : <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
                        {
                            search === "" ? sortedData?.map((user, index) => <UserCard key={user} user={user} index={index} />) : filter.concat(newUser)?.map((user, index) => <UserCard key={user} user={user} index={index} />)
                        }
                    </div>
                }


            </div>
            {
                search === "" && <AddUser setNewUser={setNewUser} newUser={newUser} />
            }
            {/* <div>
                {
                    newUser?.map((user, index) => <UserCard key={user} user={user} index={index} />)
                }
            </div> */}
        </div>
    )
}
