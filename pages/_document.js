import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* eslint-disable-next-line */}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/css/uikit.min.css"/>
                    <Script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"/>
                    <Script src="https://cdn.jsdelivr.net/npm/uikit@3.10.1/dist/js/uikit-icons.min.js"/>
                    <Script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;