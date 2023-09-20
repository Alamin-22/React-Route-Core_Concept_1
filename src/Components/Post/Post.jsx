import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Post = ({ post }) => {
    // eslint-disable-next-line react/prop-types
    const { id, title } = post;
    const navigate = useNavigate();

    const handleShowDetail=()=>{
        navigate(`/post/${id}`)
    }


    return (
        <div>
            <div className="text-center text-xl bg-cyan-400  border-2 p-7 rounded-lg ">
                <h2>Post Id: {id}</h2>
                <p>{title}</p>
                <Link to={`/post/${id}`}>Post Details</Link>
                {/* <Link to={`/post/${id}`}>
                    <button className="btn btn-primary ml-4">Show Details</button>
                </Link> */}
                <button onClick={handleShowDetail} className="btn btn-secondary text-white">Show Details</button>
            </div>
        </div>
    );
};

export default Post;