"use client"
import { getPost } from '../service/api';
import { useRouter } from "next/navigation";
async function Post({ params }) {
    const router = useRouter();
    const post = await getPost(params.post);
    return (
        <>
            <button
                className="text-xl font-semibold mt-5 ml-5"
                onClick={() => router.back()} >
                Back
            </button>
            <div className="flex flex-wrap justify-center">
                <div key={post.id} className="max-w-md bg-white rounded-md overflow-hidden shadow-md m-4 flex-grow">
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                            {post.title}
                        </h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Post;
