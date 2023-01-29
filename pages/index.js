import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/components/Layout"
import { fetchAPI} from "@/lib/api";

const inter = Inter({ subsets: ['latin'] })

export default function Home( {posts, categories, homepage }) {
  return (
      <Layout categories={categories}>
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Hello World!</h1>
          </div>
        </div>
      </Layout>
  )
}

export async function getStaticProps() {
  const [postsRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/posts", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "name" }),
    fetchAPI("/homepage", { populate: "*" }),
  ]);

  return {
    props: {
      posts: postsRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

