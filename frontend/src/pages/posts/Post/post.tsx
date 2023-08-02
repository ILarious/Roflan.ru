import { PostData } from "../service";

interface PostProps {
    post: PostData;
}

export function Post({post}:PostProps) {
    return <div>
        {post.text}
    </div>;
}