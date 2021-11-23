import '../styles/globals.css';
// import {useEffect} from "react";
const isServer = typeof window === 'undefined';
// const WOW = !isServer ? require('wow.js') : null;

function MyApp({ Component, pageProps }) {
    // useEffect(() => {
    //     new WOW().init();
    // }, []);
    
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
