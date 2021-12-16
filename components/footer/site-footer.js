import React from "react";

const Footer = () => {
    return (
        <>
            <div className="footer_links">
                <div>
                    <p>Vytae s.r.l. <br />NA - 1047804 <br />VAT - 09651341217 <br />Via G. Nicotera 10, 80132 Napoli (NA)</p>
                </div>
                <div>
                    <p>
                        <a href="tel:+393331790207">+39 3331790207</a>
                    </p>
                    <p>
                        <a href="mailto:info@vytae.com">info@vytae.com</a>
                    </p>
                </div>
                <div>
                    <p>
                        <a href="https://www.iubenda.com/privacy-policy/33559677" rel="noreferrer" target="_blank">Privacy Policy</a>
                    </p>
                    <p>
                        <a href="https://www.iubenda.com/privacy-policy/33559677/cookie-policy" rel="noreferrer" target="_blank">Cookie Policy</a>
                    </p>
                </div>
            </div>
            <div className="copy_rights">© 2021 All rights Reserved. Design by BeY Studio. Developed by Ciarus.</div>
        </>
    );
};

export default Footer;