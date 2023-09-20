import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2 className="text-3xl text-red-400 text-center mt-8">Posts: <span className="text-black font-semibold">{posts.length}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-8">
                {
                    posts.map((post => <Post key={post.id} post={post}></Post>))
                }
            </div>
        </div>
    );
};

export default Posts;