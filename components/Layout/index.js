import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Layout = ({ children, categories, global, seo}) => (
    <>
        <Nav categories={categories} global={global} />
        { children }
        <Footer global={global}/>
    </>
)

export default Layout;