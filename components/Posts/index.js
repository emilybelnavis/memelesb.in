import React from "react";
import Link from "next/link";
import CardFeatured from "@/components/Card/featuredpost";
import CardStandard from "@/components/Card/standard";

const Posts = ({ posts }) => {
    const featuredPostsCount = Math.ceil(posts.length / 5);
    const featuredPosts = posts.slice(0, featuredPostsCount);
    const unfeaturedPosts = posts.slice(featuredPostsCount, posts.length);

    return (
        <div>
            <div className="container">
                {featuredPosts.map((post, i) => {
                    return (
                        <CardFeatured post={post} key={`post__left__${post.attributes.slug}`} />
                    )
                })}
            </div>
            <div className="container">
                {unfeaturedPosts.map((post, i) => {
                    return(
                        <CardStandard post={post} key={`post__left__${post.attributes.slug}`} />
                    )
                })}
            </div>
        </div>
    )
}

export default Posts;