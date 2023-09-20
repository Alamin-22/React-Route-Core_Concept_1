import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const User = ({ user }) => {
    // eslint-disable-next-line react/prop-types
    const { id,name, email, phone } = user;
    return (
        <div >
            <div className="text-center text-xl border-2 rounded-lg p-5 bg-lime-300" >
                <h2>{name}</h2>
                <p>email: {email}</p>
                <p>Phones: {phone}</p>
                <Link to={`/user/${id}`} className="text-red-500">Show Details</Link>
                <Link to={`/user/${id}`}>
                    <button className="px-3 py-2 bg-sky-500 text-white ml-5 rounded-lg">click me</button>
                </Link>
            </div>
        </div>
    );
};

export default User;