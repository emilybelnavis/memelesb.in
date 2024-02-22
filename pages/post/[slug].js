import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";

import { fetchAPI, getStrapiURL } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";

const Post = ({post, categories, global, author}) => {
    return (
        <Layout categories={categories} post={post} global={global} author={author}>
            <div className="mb-4 rounded-3">
                <div className="container d-flex py-5 px-3 justify-content-center">
                    <div className="col-8">
                        <h2 className="display-2 post-title fw-bold pt-5 mt-5">{post.attributes.title}</h2>
                        <h4 className="heading-1 post-description">{post.attributes.description}</h4>

                        <div className="article-info mb-3">
                            <div className="article-info-left d-flex">
                                <div>
                                    <a className="author-avatar mt-auto">
                                        <img className="avatar-image" src={getStrapiMedia(post.attributes.author.data.attributes.picture)} />
                                    </a>
                                </div>
                                <div className="article-info-center">
                                    <div>
                                        <div className="author-name">{post.attributes.author.data.attributes.name}</div>
                                        <div>
                                            <span className="date">
                                                <Moment format="YYYY-MM-DD">{post.attributes.published_at}</Moment>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <ReactMarkdown children={post.attributes.content}></ReactMarkdown>
                        </div>
                    </div>
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
        populate: ["media", "category", "author.picture"],
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