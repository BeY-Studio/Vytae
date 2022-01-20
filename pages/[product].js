import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Client from 'shopify-buy';
import Main from '../layouts/main';
import ProductSlider from '../components/product-slider';
import ProductInsights from '../components/product-insights';
import TabsSection from "../components/tabsSection";
import AccordionSection from "../components/accordionSection";
// import Reviews from "../components/reviews-section";
import Packaging from "../components/packaging";
import HandsSec from "../components/hands-sec";
import Loader from "../components/loader";
import RelatedProducts from "../components/related-products";
import * as gtag from "../analytics/gtag";

export default function Home() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [products, setProducts] = useState([]);
    const [productDetail, setProductDetail] = useState({});
    const [checkoutData, setCheckoutData] = useState({});
    const [openCart, setOpenCart] = useState(false);
    const [loader, setLoader] = useState(false);
    const [itemAdded, setItemAdded] = useState(false);
    const [lang, setLang] = useState("it");
    const langProdList = {
        "en": ["CBD-Oil-10%25", "CBD-Oil-4%25", "Calm-Caps", "Sleep-Caps"],
        "it": ["Olio-CBD-10%25", "Olio-CBD-4%25", "Capsule-Calm", "Capsule-Sleep"]
    };

    const router = useRouter();

    // Initializing a client to return content in the store's primary language
    const client = Client.buildClient({
        domain: 'checkout.vytae.com',
        storefrontAccessToken: 'cd9938f5f518fd5362be333e604a4c87',
        language: (lang === "en" ? "en-US" : "it-IT")
    });

    const updateClient = (lang) => {
        client = Client.buildClient({
            domain: 'checkout.vytae.com',
            storefrontAccessToken: 'cd9938f5f518fd5362be333e604a4c87',
            language: (lang === "en" ? "en-US" : "it-IT")
        });
    }

    const fetchAllProducts = async () => {
        // initiate loader first
        setLoader(true);
        // Fetch all products in your shop
        const products = await client.product.fetchAll();
        setProducts(products);

        // once the products are fetched initially then get the product details by matching the name
        getProductDetails(products);
    };

    const fetchProductWithId = async (id) => {
        const productDetails = await client.product.fetch(id);
        setProductDetail(productDetails);
    };

    const getProductDetails = (allProducts) => {
        // old method fetch product by id
        // let productId = window.location.pathname.replace("/","");
        // fetchProductWithId(productId);

        if (allProducts?.length) {
            let productName = "";
            productName = window.location.pathname.replace("/","");
            matchProductAndFetchIt(allProducts, productName)
        }
        setLoader(false);
    }

    const matchProductAndFetchIt = (allProducts, productName) => {
        let productId = "";
        for (let i=0;i<allProducts.length;i++) {
            if (allProducts[i].title.split(" ").join("-") === productName.replaceAll("%25", "%").split(" ").join("-")) {
                productId = allProducts[i].id;
            }
        }
        fetchProductWithId(productId);
    }

    // const addItemToCheckout = async (variantId, quantity) => {
    const addItemToCheckout = async () => {
        setLoader(true);
        let variantId = productDetail?.variants?.[0].id;
        const lineItemsToAdd = [
            {
              variantId: variantId,
              quantity: 1,
            }
        ];
        // // // Add an item to the checkout
        const checkoutDataUpdated = await client.checkout?.addLineItems(checkoutData?.id, lineItemsToAdd);
        // // // update the product in the state checkout
        setCheckoutData(checkoutDataUpdated);
        setItemAdded(true);
        setLoader(false);
        toggleCart();
    };

    useEffect(() => {
        // { action, category, label, item_details, value }
        // this should run once the product has been added to the checkoutData to send the updated value to google tag manager.
        let itemQuantity = 0;
        checkoutData?.lineItems?.forEach((item) => {
            if (item?.variant?.id === productDetail?.variants[0].id) { itemQuantity = item.quantity; }
        });
        gtag.event({
            action: 'add_to_cart',
            category: 'Cart',
            label: 'Product: ' + productDetail.title,
            items: {
                "id": productDetail?.id,
                "name": productDetail?.title,
                "quantity": itemQuantity,
                "price": productDetail?.variants?.[0].price
            },
        });
        setItemAdded(false);
    }, [itemAdded]);

    const createCheckout = async () => {
        const checkoutData = await client.checkout.create();
        setCheckoutData(checkoutData);
        localStorage.setItem("checkoutId",JSON.stringify(checkoutData.id));
    };

    const fetchCheckout = async () => {
        const checkoutId = JSON.parse(localStorage.getItem("checkoutId"));

        const checkoutData = await client.checkout.fetch(checkoutId);
        setCheckoutData(checkoutData);
    }

    const SetLangValue = () => {
        if (window.location?.search) {
            let langValue = "en";
            if (window.location?.search?.length > 0) {
                const langSplit = window.location?.search?.split("lang=")[1];
                try {
                    langSplit = langSplit.split("&")[0];
                }
                catch {}
                if (langSplit === undefined || langSplit.length === 0) return
                langValue = langSplit;
                setLang(langValue);
            } else { setLang(langValue); }
            updateClient(langValue);
        }
    }

    const onRouteChangeDone = () => {
        // reload the product data
        if (products.length === 0) {
            fetchAllProducts();
        } else {
            // in the old method we only need the line below
            getProductDetails(products);
        }
    }

    const updateLineItem = async (id, quantity) => {
        setLoader(true);
        const lineItemsToUpdate = [ {id: id, quantity: quantity} ];
        // Update the line item on the checkout (change the quantity or variant)
        const checkoutDataUpdated = await client?.checkout?.updateLineItems(checkoutData?.id, lineItemsToUpdate);
        // // // update the product in the state checkout
        setCheckoutData(checkoutDataUpdated);
        setLoader(false);
    }

    const deleteLineItem = async (id) => {
        setLoader(true);

        // send google tag manager the info of the product to be removed 
        // before actually removing the product from checkoutData.
        checkoutData.lineItems.forEach((item) => {
            if (item.id === id) {
                gtag.event({
                    action: 'remove_from_cart',
                    category: 'Cart',
                    label: 'Product: ' + item?.title,
                    items: {
                        "id": item?.id,
                        "name": item?.title,
                        "quantity": item?.quantity,
                        "price": item?.variant?.price
                    },
                });
            }
        });

        const lineItemIdsToRemove = [id];
        // Remove an item from the checkout
        const checkoutDataUpdated = await client?.checkout?.removeLineItems(checkoutData?.id, lineItemIdsToRemove);
        // update the product in the state checkout
        setCheckoutData(checkoutDataUpdated);
        setLoader(false);
        
    }

    const toggleCart = () => {
        setOpenCart(!openCart);
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', onRouteChangeDone);
        return () => {
            router.events.off('routeChangeComplete', onRouteChangeDone);
          };
    }, [router.events]);

    const changeLangFromMenu = (lang) => {
        const nameInUrl = window.location.pathname.replace("/","");
        let langToCheck = "en";
        if (lang === "en") {
            langToCheck = "it";
        }
        let productName = "";
        let nameIndex = 0;
        for (let i=0;i<langProdList.en.length;i++) {
            if (nameInUrl === langProdList[langToCheck][i]) {
                nameIndex = i;
            }
        }
        productName = langProdList[lang][nameIndex];
        window.location.href = window.location.origin + "/" + productName + "?lang=" + lang;
    }

    useEffect(() => {
        SetLangValue();
        if (JSON.parse(localStorage.getItem("checkoutId"))) {
            fetchCheckout();
        } else {
            createCheckout();
        }
        setWindowWidth(window.innerWidth);
        fetchAllProducts();

        // ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

    },[]);

    return (
        <Main
            title={productDetail?.title}
            description={productDetail?.descriptionHtml}
            imageUrl={productDetail?.images ? productDetail.images[0]?.src : null}
            keyword={"Hemp Oil, Canapa, Olio, Oil"}
            products={products}
            checkout={checkoutData}
            openCart={openCart}
            setOpenCart={setOpenCart}
            toggleCart={toggleCart}
            updateLineItem={updateLineItem}
            deleteLineItem={deleteLineItem}
            lang={lang}
            changeLangFromMenu={changeLangFromMenu}
        >
            {loader ? <Loader /> : null}
            <ProductSlider productDetail={productDetail} lang={lang} />
            <ProductInsights
                productDetail={productDetail}
                addItemToCheckout={addItemToCheckout}
                toggleCart={toggleCart}
                checkout={checkoutData}
                itemAdded={itemAdded}
                lang={lang}
            />
            {
                windowWidth > 1025
                ?
                <TabsSection productDetail={productDetail} lang={lang} />
                :
                <AccordionSection productDetail={productDetail} lang={lang} />
            }
            <Packaging
                windowWidth={windowWidth}
                lang={lang}
            />
            {/* <Reviews /> */}
            <HandsSec
                windowWidth={windowWidth}
                productDetail={productDetail}
                lang={lang}
            />
            <RelatedProducts
                lang={lang}
                products={products}
                productDetail={productDetail}
            />
        </Main>
    );
}
