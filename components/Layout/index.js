import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Layout = ({ children, categories, global, seo}) => (
    <>
        {/*<div className="d-flex h-100 text-center container-dark">*/}
        {/*    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">*/}
        {/*        <header className="mb-auto">*/}
        {/*            <Nav categories={categories} global={global} />*/}
        {/*        </header>*/}
        {/*        { children }*/}
        {/*        <Footer global={global}/>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="container">
            <header className="blog-header pb-5 mb-5">
                <Nav categories={categories} global={global} />
            </header>
            <main className="container pb-5 mb-5">
                { children }
            </main>
            <Footer global={global}/>
        </div>
    </>
)

export default Layout;