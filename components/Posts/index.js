import React from "react";
import Link from "next/link";
import Card from "@/components/Card";


const Posts = ({ posts }) => {
    const featuredPostsCount = Math.ceil(posts.length / 5);
    const featuredPosts = posts.slice(0, featuredPostsCount);
    const unfeaturedPosts = posts.slice(featuredPostsCount, posts.length);

    return (
        <div>
            {featuredPosts.map((post, i) => {
                return (
                    <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                        <div class="col-md-6 px-0">
                            <h1 class="display-4 fst-italic on-dark-background">{post.attributes.title}</h1>
                            <p class="lead my-3">{post.attributes.description}</p>
                            {/*<p class="lead mb-0"><a href={} class="text-white fw-bold">Continue reading...</a></p>*/}
                            <Link href={`/post/${post.attributes.slug}`}>
                                <p class="lead mb-0">Continue reading...</p>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts;