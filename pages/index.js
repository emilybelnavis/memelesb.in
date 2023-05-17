import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from '@/styles/Home.module.scss'
import Layout from "@/components/Layout"
import { fetchAPI} from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";

const inter = Inter({ subsets: ['latin'] })

export default function Home( {posts, categories, global, homepage, about }) {
    const coverImage = {
        background: ` linear-gradient(rgba(0,0,0, 0.25), rgba(0, 0, 0, 0.45)),
                     url("${getStrapiMedia(homepage.attributes.media)}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    return (
        <Layout categories={categories} global={global} homepage={homepage} about={about}>
            <div className="mb-4 rounded-3">
                <div className="container-fluid py-5 px-5" style={coverImage}>
                    <h1 className="display-1 fw-bold on-dark-background-cover">{homepage.attributes.site_tagline}</h1>
                    <p className="col-md-8 fs-4 on-dark-background-cover">{about.attributes.about_home}</p>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const [postsRes, categoriesRes, homepageRes, globalRes, aboutRes] = await Promise.all([
        fetchAPI("/posts", { populate: ["image", "category"] }),
        fetchAPI("/categories", { populate: "name" }),
        fetchAPI("/homepage", {
            populate: {
                media: "*"
            }
        }),
        fetchAPI("/global", { populate: "*"}),
        fetchAPI("/about", { populate: "*"}),
    ]);

    return {
        props: {
            posts: postsRes.data,
            categories: categoriesRes.data,
            homepage: homepageRes.data,
            global: globalRes.data,
            about: aboutRes.data,
        },
        revalidate: 1,
    };
}

