import PropTypes from 'prop-types';
import { IoIosMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaCity } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import { MdHomeWork } from "react-icons/md";

export default function UserDetails() {

    const getStreet = (address) => {
        let street;

        street = address.split(" ");

        // console.log(street?.[1]+" "+street?.[2]);
        return (street?.[1] + " " + street?.[2]);
    }

    const user = useLoaderData();
    console.log(user);
    return (
        <div className="card w-full h-screen bg-base-100 shadow-xl my-10">
            <section className='flex justify-center pl-10'>
                <figure className=' mb-0 py-4 flex justify-between gap-x-5 '>
                    <div className="avatar border-4 border-accent rounded-full">
                        <div className="rounded-full">
                            <img src={user?.image} />
                        </div>
                    </div>
                    <div>
                        <div className='flex space-x-0 gap-x-3'>
                            <h2 className="card-title text-3xl ">{user?.firstName}</h2>
                            <h2 className="card-title text-3xl text-accent">{user?.lastName}</h2>
                        </div>
                        <h2 className="mt-6"><IoIosMail style={{ display: "inline" }} />
                            <span className='text-blue-600 font-bold ml-2'>
                                {user?.email}
                            </span>
                        </h2>
                        <div className=" text-xl text-gray-500 flex flex-col items-start ">
                            <p>
                                <FaHome style={{ display: "inline" }} /><span className='ml-2'>Address: </span> {user?.address?.address}
                            </p>
                            <p >
                                <FaRoad style={{ display: "inline" }} /><span className='ml-2'>Street: </span> {getStreet(user?.address?.address)},
                            </p>
                            <p>
                                <FaCity style={{ display: "inline" }} /><span className='ml-2'>City: </span> {user?.address?.city}
                            </p>
                            <p>
                                <MdHomeWork style={{ display: "inline" }} /><span className='ml-2'>Company: </span>{user?.company?.name}
                            </p>
                        </div>
                        <p className='card-title font-black  flex justify-center'>

                        </p>
                    </div>
                    {/* <img src={user?.image} className='drawer-overlay' alt="" /> */}
                </figure>
            </section>
        </div>
    )
}

UserDetails.propTypes = {
    user: PropTypes.node
}