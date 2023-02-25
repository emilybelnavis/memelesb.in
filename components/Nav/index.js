import React from "react";
import Link from "next/link";

const Nav = ({ categories, global }) => {

    return (
        <div>
            <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link href="/" className="link-home">
                                {global.attributes.site_name}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        {categories.map((category) => {
                            return (
                                <li key={category.id}>
                                    <Link href={`/category/${category.attributes.slug}`} className="uk-link-reset">
                                        {category.attributes.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
};


export default Nav;