import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    const navigate = useNavigate();
    const {postId}= useParams();
    console.log(postId);
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className="text-center mt-7 w-96 mx-auto bg-amber-200 p-4 rounded-lg">
                <h1 className="text-xl font-medium">Post Details about : <span className="text-red-500">{id}</span></h1>
                <p className="text-5xl my-4">Title: {title}</p>
                <p className="text-2xl"><small>{body}</small></p>
                <button onClick={handleGoBack} className="btn btn-accent">Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;