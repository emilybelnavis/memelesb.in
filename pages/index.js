import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from '@/styles/Home.module.scss'
import Layout from "@/components/Layout"
import { fetchAPI} from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";

const inter = Inter({ subsets: ['latin'] })

export default function Home( {posts, categories, global, homepage }) {
    const coverImage = {
        background: `linear-gradient(rgba(0,0,0, 0.25), rgba(0, 0, 0, 0.45)), 
                     url("${getStrapiMedia(homepage.attributes.media)}")`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "relative",
        height: "auto",
        width: "90vw"

    }
    return (
        <Layout categories={categories} global={global} homepage={homepage}>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-4" style={coverImage}>
                    <h1 className="display-1 fw-bold">{global.attributes.site_tagline}</h1>
                    <h3 className="display-3">{global.attributes.site_description}</h3>
                </div>
            </div>
            {/*<div className="uk-cover-container">*/}
            {/*    <img src={getStrapiMedia(homepage.attributes.media)}/>*/}
            {/*    <div className="uk-container-expand">*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="uk-section">*/}
            {/*    <div className="uk-cover-container uk-container-large uk-position-center">*/}
            {/*        <img src={getStrapiMedia(homepage.attributes.media)} uk-cover/>*/}
            {/*        <div className="uk-position-cover">*/}
            {/*            <h1 className="cover-text">{global.attributes.site_tagline}</h1>*/}
            {/*            <h3 className="cover-text">{global.attributes.site_description}</h3>*/}
            {/*            <p className="cover-text">{homepage.attributes.landingText}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Layout>
    )
}

export async function getStaticProps() {
    const [postsRes, categoriesRes, homepageRes, globalRes] = await Promise.all([
        fetchAPI("/posts", { populate: ["image", "category"] }),
        fetchAPI("/categories", { populate: "name" }),
        fetchAPI("/homepage", {
            populate: {
                media: "*"
            }
        }),
        fetchAPI("/global", { populate: "*"}),
    ]);

    return {
        props: {
            posts: postsRes.data,
            categories: categoriesRes.data,
            homepage: homepageRes.data,
            global: globalRes.data,
        },
        revalidate: 1,
    };
}

