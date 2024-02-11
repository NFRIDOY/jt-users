import PropTypes from 'prop-types';
import { IoIosMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaCity } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function UserCard({ user }) {

    const getStreet = (address) => {
        let street;

        street = address.split(" ");

        // console.log(street?.[1]+" "+street?.[2]);
        return (street?.[1] + " " + street?.[2]);
    }

    return (
        <Link to={`/UserDetails/${user?.id}`} className="card w-96 bg-base-100 shadow-xl border-2 hover:scale-105 hover:border-accent duration-1000	transition-duration: 500ms">
            <figure className='border-b-4 mb-0 py-4 flex justify-between gap-x-5 border-accent'>
                <div className="avatar border-4 border-accent rounded-full">
                    <div className="w-24 rounded-full">
                        <img src={user?.image} />
                    </div>
                </div>
                <div>
                    <div className='flex space-x-0 gap-x-2'>
                        <h2 className="card-title text-3xl ">{user?.firstName}</h2>
                        <h2 className="card-title text-3xl text-accent">{user?.lastName}</h2>
                    </div>
                    <h2 className="mt-6"><IoIosMail style={{ display: "inline" }} />
                        <span className='text-blue-600 font-bold ml-2'>
                            {user?.email}
                        </span>
                    </h2>
                </div>
                {/* <img src={user?.image} className='drawer-overlay' alt="" /> */}
            </figure>
            <div className="card-body">
                <div className='flex flex-col'>
                    <div className=" text-sm text-gray-500 flex flex-col items-start">
                        <h2><FaHome style={{ display: "inline" }} /> {user?.address?.address}</h2>
                        {
                            getStreet(user?.address?.address) && <p >
                                <FaRoad style={{ display: "inline" }} /> {getStreet(user?.address?.address)},
                            </p>
                        }
                        <p>
                            <FaCity style={{ display: "inline" }} /> {user?.address?.city}
                        </p>
                    </div>
                    {/* <div>
                        <p>
                            {user?.address?.address}
                        </p>
                        <p>
                            Street: {getStreet(user?.address?.address)}
                        </p>
                        <p>
                            City: {user?.address?.city}
                        </p>
                    </div> */}
                </div>
                <p className='card-title font-black border-t-2 border-accent mt-16 pt-5 flex justify-center'>
                    {user?.company?.name}
                </p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-accent">Buy Now</button>
                </div> */}
            </div>
        </Link>
    )
}

UserCard.propTypes = {
    user: PropTypes.node
}
