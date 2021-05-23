import React from "react";
import "./Product.css";

function Product({
  className,
  profileImg,
  title,
  subtitle,
  productInfo,
  linkMsg,
}) {
  return (
    //<li className= 'product'>
    <li className={className}>
      {profileImg ? (
        <>
          <div className="product__profile">
            <img src={profileImg}></img>
            <h2 className="product__title">{title}</h2>
          </div>
          <p className="product__subtitle">{subtitle}</p>
        </>
      ) : (
        <h2 className="product__title">{title}</h2>
      )}

      {/* img 여러개인 컴포넌트 */}
      {productInfo.length > 1 ? (
        <div className="product__multiContainer">
          {productInfo.map((info) => {
            return (
              <div className="product__multiImg">
                <img src={info.imgSrc} alt="" />
                <p>{info.imgDesc}</p>
                <a className="product__imgLink"></a>
              </div>
            );
          })}
        </div>
      ) : (
        // img 한개인 컴포넌트
        <div className="product__img">
          <img src={productInfo[0]} alt="" />
        </div>
      )}
      <a className="product__link">{linkMsg}</a>
    </li>
  );
}

export default Product;
