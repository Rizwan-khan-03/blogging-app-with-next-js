"use client "
import Link from 'next/link';
import { getPosts } from './service/api';

async function AllPost() {
    const posts = await getPosts();
    return (
        <>
        <h1 className="text-xl font-semibold mb-2">Blogs</h1>
          <div className="flex flex-wrap justify-center">
            {posts.map((post) => (
                <div key={post.id} className="max-w-md bg-white rounded-md overflow-hidden shadow-md m-4 flex-grow">
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">
                            <Link href={`${post.id}`}>
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
      
    );
}

export default AllPost;
