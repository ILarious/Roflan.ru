import {useEffect, useState} from "react";
import {getPosts, PostData} from "./service";
import {Post} from "./Post/post";


export function Posts() {
    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() =>  {
        getPosts()
            .then((posts) => setPosts(posts))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Посты</h1>

            {posts.map((post) =>
                <Post post={post}/>
            )}
        </div>
    );
}