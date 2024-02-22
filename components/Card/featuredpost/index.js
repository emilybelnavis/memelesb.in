import React from "react";
import Link from "next/link";
import {getStrapiMedia} from "@/lib/media";
;

const CardFeatured = ({ post }) => {

    return (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="px-0">
                <h1 className="display-4 fst-italic on-dark-background">{post.attributes.title}</h1>
                <p className="lead my-3">{post.attributes.description}</p>
                <Link href={`/post/${post.attributes.slug}`}>
                    <p className="lead mb-0">Continue reading...</p>
                </Link>
            </div>
        </div>
    )
}

export default CardFeatured;