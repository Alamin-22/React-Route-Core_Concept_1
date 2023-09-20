import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user= useLoaderData();
    const {name}= user;

    return (
        <div>
            <h1 className="text-3xl text-red-600">Details About User: {name}</h1>

        </div>
    );
};

export default UserDetails;