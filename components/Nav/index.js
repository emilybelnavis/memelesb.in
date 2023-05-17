import React from "react";
import Link from "next/link";

const Nav = ({ categories, global }) => {

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">{global.attributes.site_name}</Link>
                    <div className="d-flex">
                        <ul className="nav">
                            {categories.map((category) => {
                                return(
                                    <li key={category.id} className="nav-item">
                                        <Link href={`/category/${category.attributes.slug}`} className="nav-link py-auto">
                                            {category.attributes.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default Nav;