import Nav from "@/components/Nav";

const Layout = ({ children, categories, seo }) => (
    <>
        <Nav categories={categories} />
        { children }
    </>
)

export default Layout;