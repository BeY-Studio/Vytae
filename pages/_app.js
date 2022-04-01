import '../styles/globals.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import * as gtag from "../analytics/gtag";
import { useRouter } from 'next/router';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

    // for google analytics
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events]);


    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/*G-3V9MVCBWMK*/}
          <Helmet>
            <script>{`window.dataLayer = window.dataLayer || [];`}</script>
          </Helmet>
          <Helmet>
            <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T5D3KBB');`}</script>
          </Helmet>
          <Helmet>
            <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-T5D3KBB"></script>
          </Helmet>
          <Helmet>
            <script>{`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)};
              gtag('js', new Date());
              gtag('config', 'GTM-T5D3KBB');`}
            </script>
          </Helmet>
            {/*Google Tag Manager (noscript)*/}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-T5D3KBB"
                height="0"
                width="0"
                style={{"display":"none","visibility":"hidden"}}
              ></iframe>
            </noscript>
            {/*End Google Tag Manager (noscript)*/}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
