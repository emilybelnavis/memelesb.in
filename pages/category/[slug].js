import Layout from "@/components/Layout";
import Post from "@/components/Posts";

import { fetchAPI } from "@/lib/api";

const Category = ({ category, categories, global }) => {
    return (
        <Layout categories={categories.data} global={global}>
            <div className="mb-4 rounded-3">
                <div className="card-container py-5 px-3">
                    <h1 className="display-1 fw-bold">{category.attributes.name}</h1>
                </div>
            </div>
            <Post posts={category.attributes.posts.data} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const categories = await fetchAPI("/categories", { fields: ["slug"]});
    return {
        paths: categories.data.map((category) => ({
            params: {
                slug: category.attributes.slug,
            },
        })),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const matchingCategories = await fetchAPI("/categories", {
        filters: { slug: params.slug },
        populate: {
            posts: {
                populate: "*"
            },
        },
    });

    const allCategories = await fetchAPI("/categories");

    return {
        props: {
            category: matchingCategories.data[0],
            categories: allCategories,
        },
        revalidate: 1,
    }
}

export default Category;