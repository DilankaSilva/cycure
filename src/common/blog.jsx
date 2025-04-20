"use client";
import Link from 'next/link';
import Slider from 'react-slick';
import { useEffect, useState } from "react";
import { getPosts } from "@/services/blogService";

const Blog = ({ style, style_2 }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const postsData = await getPosts();
                setPosts(postsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } },
            { breakpoint: 575, settings: { slidesToShow: 1 } }
        ]
    };

    if (loading) {
        return <div className="container text-center py-5">Loading posts...</div>;
    }

    if (error) {
        return (
            <div className="container text-center py-5">
                <h2>Error loading posts</h2>
                <p className="text-danger">{error}</p>
            </div>
        );
    }

    return (
        <section className={`blog-area ${style ? "about-page-blog" : ""} ${style_2 ? "blog-two-area" : ""}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section-title text-center mb-60">
                            <h2 className="title">Latest Articles and News</h2>
                        </div>
                    </div>
                </div>

                <div className="row blog-active">
                    <Slider {...settings}>
                        {posts.map((post) => {
                            const postData = post.attributes || post;
                            const imageUrl = postData.coverImage?.data?.attributes?.url ||
                                postData.coverImage?.url;
                            const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}` : null;

                            return (
                                <div key={post.id} className="col-xl-3">
                                    <div className="blog-post-item">
                                        <div className="blog-post-thumb">
                                            <Link href={`/blog-details/${postData.slug}`}>
                                                {fullImageUrl ? (
                                                    <img
                                                        src={fullImageUrl}
                                                        alt={postData.coverImage?.data?.attributes?.alternativeText ||
                                                            postData.coverImage?.alternativeText ||
                                                            postData.title}
                                                        className="img-fluid"
                                                        style={{ width: '100%', height: 'auto' }}
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="bg-gray-200 w-full h-[296px] flex items-center justify-center">
                                                        <span className="text-gray-500">No image</span>
                                                    </div>
                                                )}
                                            </Link>
                                        </div>
                                        <div className="blog-post-content">
                                            <h3 className="title">
                                                <Link href={`/blog-details/${postData.slug}`}>
                                                    {postData.title}
                                                </Link>
                                            </h3>
                                            <span className="post-date">
                                                {new Date(postData.publishedAt || postData.publishedat).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Blog;