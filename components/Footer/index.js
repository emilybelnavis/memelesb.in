import React from "react";
import Link from "next/link";

const Footer = ({global}) => {
    let instagramLink = global.attributes.instagram;
    let facebookLink = global.attributes.facebook;
    let twitterLink = global.attributes.twitter;

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <i className="bi-trash" />
                    </Link>
                    <span className="mb-3 mb-md-0 text-muted">© 2069 Ligma Corp, Inc</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    {instagramLink ? (
                        <li className="ms-3">
                            <Link href={`https://instagram.com/${global.attributes.instagram}`} className="text-muted">
                                <i className="bi-instagram" />
                            </Link>
                        </li>
                    ): (null)}
                    {facebookLink ? (
                        <li className="ms-3">
                            <Link href={`https://facebook.com/${global.attributes.facebook}`} className="text-muted">
                                <i className="bi-facebook" />
                            </Link>
                        </li>
                    ): (null)}
                    {twitterLink ? (
                        <li className="ms-3">
                            <Link href={`https://twitter.com/${global.attributes.twitter}`} className="text-muted">
                                <i className="bi-twitter" />
                            </Link>
                        </li>
                    ): (null)}
                </ul>
            </footer>
        </div>
    )
}



export default Footer;