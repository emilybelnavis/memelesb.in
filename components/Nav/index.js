import React from "react";
import Link from "next/link";

const Nav = ({ categories, global }) => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg ml-bg-primary-container-light">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand ml-nav-brand-on-primary-container-light">{global.attributes.site_name}</Link>
                <div className="d-flex">
                    <ul className="nav">
                        {categories.map((category) => {
                            return(
                                <li key={category.id} className="nav-item">
                                    <Link href={`/category/${category.attributes.slug}`} className="nav-link ml-nav-link-on-primary-container-light">
                                        {category.attributes.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
        // <div>
        //     <nav className="ml-navbar-container ml-navbar-sticky">
        //         <div className="uk-container">
        //             <div className="uk-navbar-left">
        //                 <ul className="uk-navbar-nav">
        //                     <Link href="/" className="uk-navbar-item uk-logo light primary-on-container">
        //                         {global.attributes.site_name}
        //                     </Link>
        //                 </ul>
        //             </div>
        //             <div className="uk-navbar-right">
        //                 <ul className="uk-navbar-nav">
        //                     {categories.map((category) => {
        //                         return(
        //                             <li key={category.id}>
        //                                 <Link href={`/category/${category.attributes.slug}`} className="uk-link-reset">
        //                                     {category.attributes.name}
        //                                 </Link>
        //                             </li>
        //                         )
        //                     })}
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
};


export default Nav;