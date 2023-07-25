import React from "react";
import Link from "next/link";

const RelatedProducts = (props) => {
  return (
    <div className="related_products">
      <h2 className="section_h2">
        {props.lang === "it" ? "Prodotti correlati" : "Related Products"}
      </h2>
      <div className="inner">
        {props.products?.length > 0
          ? props.products.map((product) =>
              product.id !== props.productDetail?.id ? (
                <div className="product_con" key={product.id}>
                  <div className="img_con">
                    <img src={product?.images?.[0]?.src} alt={product?.title} />
                  </div>
                  <div className="title">{product?.title}</div>
                  <button className="buy">
                    <Link
                      href={
                        "/" +
                        product?.title.split(" ").join("-").replace("%", "%25") +
                        "?lang=" +
                        props.lang
                      }
                      key={product?.id}
                    >
                      <a>{props.lang === "it" ? "Acquista ora" : "Buy Now"}</a>
                    </Link>
                  </button>
                </div>
              ) : null
            )
          : null}
      </div>
    </div>
  );
};

export default RelatedProducts;
