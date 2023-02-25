import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Layout from "@/components/Layout"
import { fetchAPI} from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";

const inter = Inter({ subsets: ['latin'] })

export default function Home( {posts, categories, global }) {
    return (
      <Layout categories={categories} global={global}>
          <div className="uk-cover-background">

          </div>
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>{global.attributes.site_tagline}</h1>
              <h3>{global.attributes.site_description}</h3>
          </div>
        </div>
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

