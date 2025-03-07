"use client"
import Link from "next/link";
import { useState } from "react";
import NavTabs from "./shop-nav-tab";
import RelatedProduct from "./related-product";
import Image from "next/image";

const single_product = {
    nav_img: [
        "/assets/img/shop/shop_nav01.jpg", "/assets/img/shop/shop_nav02.jpg",
        "/assets/img/shop/shop_nav03.jpg", "/assets/img/shop/shop_nav04.jpg",
    ],
    single_product_img: [
        "/assets/img/shop/shop_details_img01.jpg", "/assets/img/shop/shop_details_img02.jpg",
        "/assets/img/shop/shop_details_img03.jpg", "/assets/img/shop/shop_details_img04.jpg",
    ],
    rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star"],
    title: "Wireless Phone Charger",
    des: (<>Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat facere possimus assumenda omnis dolor repellendu sautem Temporibus  quibusdam aut officiis nam libero tempore cum soluta nobis eligendi.</>)
}
const { nav_img, single_product_img, rating, title, des } = single_product;

const ShopDetailsArea = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [productCount, setProductCount] = useState(1);
    const plusBtn = () => {
        setProductCount((prev) => prev + 1);
    };
    const minusBtn = () => {
        if (productCount >= 1) {
            setProductCount((prev) => prev - 1);
        }
    };
    return (
        <section className="shop-area shop-details-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6">
                        <div className="shop-details-images">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                {nav_img.map((img, index) => (
                                    <li key={index} className="nav-item" role="presentation">
                                        <button onClick={() => setCurrentImageIndex(index)}
                                            className={`nav-link ${index === currentImageIndex ? 'active' : ''}`}>
                                            <Image src={img} width={170} height={180} alt="img" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                {single_product_img.map((sing_img, index) => (
                                    <div key={index} className={`tab-pane ${index === currentImageIndex ? 'show active' : ''}`} id={`item${index}`}>
                                        <Image src={sing_img} width={650} height={744} alt="img" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="shop-details-content">
                            <div className="shop-single-rating">
                                <div className="rating">
                                    {rating.map((icon, i) => (
                                        <i key={i} className={icon}></i>
                                    ))}
                                </div>
                                <span className="rating-count">(1 customer review)</span>
                            </div>
                            <h2 className="title">{title}</h2>
                            <div className="shop-details-price">
                                <span className="amount">$40.00</span>
                            </div>
                            <p>{des}</p>
                            <div className="inner-shop-perched-info">
                                <form onSubmit={e => e.preventDefault()}>
                                    <div className="quickview-cart-plus-minus">
                                        <input type="text" value={productCount}
                                            onChange={(e) => setProductCount(Number(e.target.value))}
                                        />
                                        <div onClick={minusBtn} className="dec qtybutton">-</div>
                                        <div onClick={plusBtn} className="inc qtybutton">+</div>
                                    </div>
                                    <button className="btn">Add to cart</button>
                                </form>
                            </div>
                            <div className="inner-shop-details-bottom">
                                <span className="posted_in">Category : <Link href="#">Uncategorized</Link></span>
                                <span className="tagged_as">Tags :
                                    <Link href="#">charger,</Link>
                                    <Link href="#">wireless</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <NavTabs />
                <RelatedProduct />
            </div>
        </section>
    )
}

export default ShopDetailsArea
