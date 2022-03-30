import Header from "../components/header/site-header";
import Footer from "../components/footer/site-footer";
import Head from "next/head";
import { META_IMAGE, META_KEYWORDS } from "../configs/configs";
import Cart from "../components/cart-sidebar";

const Main = (
    {
        children,
        title,
        description,
        imageUrl = META_IMAGE,
        keyword = META_KEYWORDS,
        products,
        checkout,
        toggleCart,
        openCart,
        updateLineItem,
        deleteLineItem,
        lang,
        changeLangFromMenu
    }
) => {

  return (
    <>
      <Head>
        {/*Primary Meta Tags*/}
        <title>{title}</title>
        <link rel="shortcut icon" href="./favicon1.png" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />

        {/*Open Graph / Facebook*/}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />

        {/*Twitter*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,600;0,700;1,100;1,300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" id="font-awesome-official-css" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" media="all" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
      </Head>

      <div className="wrapper">
        <Header
          checkout={checkout}
          products={products}
          toggleCart={toggleCart}
          lang={lang}
          changeLangFromMenu={changeLangFromMenu}
        />
        <Cart
          products={products}
          checkout={checkout}
          toggleCart={toggleCart}
          openCart={openCart}
          updateLineItem={updateLineItem}
          deleteLineItem={deleteLineItem}
          lang={lang}
          changeLangFromMenu={changeLangFromMenu}
        />
        {children}

        <Footer />
      </div>
    </>
  )
};

export default Main;