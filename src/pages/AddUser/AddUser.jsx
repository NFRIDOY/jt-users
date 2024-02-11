{/* 
Avatar
First Name
Last Name
Email
Address (Street, Suite, City)
Company Name 
*/}
import PropTypes from 'prop-types';
import uniqid from 'uniqid';


export default function AddUser({ setNewUser, newUser }) {

    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.fName.value;
        const lastName = form.lName.value;
        const email = form.email.value;
        const image = form.avatar.value;
        const address = form.address.value;
        const city = form.city.value;
        const companyName = form.companyName.value;

        const newUserObj = {
            id: uniqid(),
            firstName,
            lastName,
            email,
            image,
            address: {
                address: address,
                city: city,
            },
            company: {
                name: companyName
            }

        }

        // console.log(setUsersData([...usersData, newUserObj]));
        console.log(setNewUser([...newUser, newUserObj]));
        console.log(newUserObj);
    }
    return (
        <div className="">
            <h1 className="text-center text-lg lg:text-3xl font-bold py-10 ">Fill Up The Form To Entry New User</h1>
            <form className="card-body w-11/12 lg:w-[500px] mx-auto border-2 rounded-xl" onSubmit={handleAddUser}>
                <section className="flex flex-col md:flex-row justify-between gap-x-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name="fName" id="" placeholder="type" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="lName" id="" placeholder="type" className="input input-bordered" required />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row justify-between gap-x-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" id="email" placeholder="type" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Avatar</span>
                        </label>
                        <input type="text" name="avatar" id="avatar" placeholder="type URL" className="input input-bordered" required />
                    </div>
                </section>
                <section className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name="address" id="address" placeholder="type" className="input input-bordered" required />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Road</span>
                        </label>
                        <input type="text" name="address" id="address" placeholder="type" className="input input-bordered" required />
                    </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">City</span>
                        </label>
                        <input type="text" name="city" id="city" placeholder="type" className="input input-bordered" required />
                    </div>
                </section>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="companyName" id="companyName" placeholder="type" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6 ">
                    <button className="btn btn-accent text-white">Add User</button>
                </div>
            </form>


        </div>
    )
}

AddUser.propTypes = {
    newUser: PropTypes.node,
    setNewUser: PropTypes.node,

}
