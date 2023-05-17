import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";

import { fetchAPI } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";

const Post = ({post, categories, global}) => {
    return (
        <Layout categories={categories} post={post} global={global}>
            <div className="mb-4 rounded-3">
                <div className="card-container py-5 px-3">
                    <h1 className="display-1 fw-bold pt-5 mt-5">{post.attributes.title}</h1>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const postsRes = await fetchAPI("/posts", {fields: ["slug"]});

    return {
        paths: postsRes.data.map((post) => ({
            params: {
                slug: post.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }){
    const postsRes = await fetchAPI("/posts", {
        filters: {
            slug: params.slug,
        },
        populate: ["image", "category", "author.picture"],
    });

    const categoriesRes = await fetchAPI("/categories");

    const [globalRes] = await Promise.all([
        fetchAPI("/global", { populate: "*" }),
    ]);

    return {
        props: {
            post: postsRes.data[0],
            categories: categoriesRes.data,
            global: globalRes.data,
        },
        revalidate: 1,
    };
}

export default Post