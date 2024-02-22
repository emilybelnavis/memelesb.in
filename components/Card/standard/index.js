import React from "react";
import Link from "next/link";
;

const CardStandard = ({ post }) => {
    return (
        <div className="col-md-6 pb-5">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h1 className="display-6 fw-bold">{post.attributes.title}</h1>
                    <p className="lead my-3">{post.attributes.description}</p>
                    <Link href={`/post/${post.attributes.slug}`}>
                        <p className="lead mb-0">Continue reading...</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardStandard;