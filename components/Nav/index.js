import React from "react";
import Link from "next/link";

const Nav = ({ categories, global }) => {

    return (
        <div>
            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; end: !.uk-height-large; offset: 200">
                <nav className="uk-navbar-container uk-navbar-sticky">
                    <div className="uk-container uk-container-expand">
                        <div className="uk-navbar" uk-navbar role="menubar">
                            <div className="uk-navbar-left">
                                <ul className="uk-navbar-nav">
                                    <Link href="/" className="uk-navbar-item uk-logo">
                                        {global.attributes.site_name}
                                    </Link>
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
                        </div>
                    </div>
                </nav>
            </div>
            {/*<div className="uk-sticky uk-sticky-fixed" uk-sticky="sel-target: .uk-navbar-container; cls active: uk-navbar-sticky">*/}
            {/*    <nav className="uk-navbar-container uk-navbar-sticky">*/}
            {/*        <div className="uk-container">*/}
            {/*            <div uk-navbar>*/}
            {/*                <div className="uk-navbar-right">*/}
            {/*                    <ul className="uk-navbar-nav">*/}
            {/*                        {categories.map((category) => {*/}
            {/*                            return (*/}
            {/*                                <li key={category.id}>*/}
            {/*                                    <Link href={`/category/${category.attributes.slug}`} className="uk-link-reset">*/}
            {/*                                        {category.attributes.name}*/}
            {/*                                    </Link>*/}
            {/*                                </li>*/}
            {/*                            );*/}
            {/*                        })}*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</div>*/}
        </div>
    );
};


export default Nav;