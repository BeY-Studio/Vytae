import '../styles/globals.css';
const isServer = typeof window === 'undefined';

function MyApp({ Component, pageProps }) {    
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
