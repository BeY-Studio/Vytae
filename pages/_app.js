import '../styles/globals.css';
import ReactGA from "react-ga4";
const isServer = typeof window === 'undefined';

ReactGA.initialize('G-RJCDWD4WHM');

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
