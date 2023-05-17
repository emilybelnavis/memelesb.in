import React from "react";
import Link from "next/link";
;

const Card = ({ post }) => {
    return (
        <Link href={`/post/${post.attributes.slug}`}>
            <a className="link-primary">

            </a>
        </Link>
    )
}

export default Card;