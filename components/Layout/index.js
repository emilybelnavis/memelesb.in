import Nav from "@/components/Nav";

const Layout = ({ children, categories, global, seo }) => (
    <>
        <Nav categories={categories} global={global} />
        { children }
    </>
)

export default Layout;