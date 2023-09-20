import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1 className="text-7xl text-center mt-[30vh]">Oops</h1>
            <p className="text-6xl text-center">{error.statusText || error.message}</p>
            {
                error.status === 404 &&  <div className="text-center text-3xl  font-semibold">
                    <h3>Page Not Found</h3>
                    <p>Go Back Where You  From</p>
                    <Link to="/"><button className="btn btn-neutral">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default Error;