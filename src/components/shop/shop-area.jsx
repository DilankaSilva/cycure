"use client"
import shop_data from "@/data/shop-data"
import Image from "next/image"
import Link from "next/link"

const ShopArea = () => {
    return (
        <section className="shop-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shop-top-wrap">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="shop-top-left">
                                        <p>Showing 1-9 of 13 results</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="shop-top-right">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <select name="orderby" id="shortBy" className="orderby form-select" defaultValue="default">
                                                <option value="default">Default shorting</option>
                                                <option value="popularity">Sort by popularity</option>
                                                <option value="rating">Sort by average rating</option>
                                                <option value="latest">Sort by latest</option>
                                                <option value="price-low">Price: low to high</option>
                                                <option value="price-high">Price: high to low</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cycure-shop-product-main">
                            <div className="row">
                                {shop_data.map((item) => (
                                    <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                                        <div className="shop-item">
                                            <div className="product-thumb">
                                                <Link href="/shop-details">
                                                    <Image src={item.thumb} width={338} height={375} alt="img" />
                                                </Link>
                                                <div className="price-wrap">
                                                    <span className="amount">${item.price}.00</span>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4 className="title"><Link href="/shop-details">{item.title}</Link></h4>
                                                <Link href="/shop-details" className="add-cart-btn">{item.btn}</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="Page navigation pagination-wrap">
                                    <ul className="pagination">
                                        <li className="page-item"><Link className="page-link current" href="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link next" href="#">Next</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopArea
