"use client";
import { useEffect, useState } from "react";
import { getLatestPost } from "@/services/blogService";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/common/breadcrumb";
import BlogSidebar from "@/components/blogs/blog-standard/blog-sidebar";
import Image from "next/image";
import Link from "next/link";


const BlogDetailsArea = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadLatestPost = async () => {
            try {
                const latestPost = await getLatestPost();
                setPost(latestPost);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadLatestPost();
    }, []);

    if (loading) {
        return (
            <div className="container text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container text-center py-5">
                <h2>Error loading post</h2>
                <p className="text-danger">{error}</p>
                <Link href="/blog" className="btn btn-primary mt-3">
                    Back to Blog
                </Link>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="container text-center py-5">
                <h2>No posts found</h2>
                <Link href="/blog" className="btn btn-primary mt-3">
                    Back to Blog
                </Link>
            </div>
        );
    }

    const postData = post.attributes || post;
    const imageUrl = postData.coverImage?.data?.attributes?.url || postData.coverImage?.url;
    const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}` : null;

    return (
        <>
            <Header />
            <main>
                <Breadcrumb
                    title={postData.title}
                    sm_title="Latest Post"
                />
                <section className="standard-blog-area inner-blog-area blog-details-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-7">
                                <div className="standard-blog-post">
                                    <div className="standard-post-thumb">
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
                                    </div>
                                    <div className="standard-post-content blog-details-content">
                                        <h2 className="title">{postData.title}</h2>
                                        <ul className="standard-post-meta list-wrap">
                                            <li>
                                                <i className="far fa-calendar-alt"></i>
                                                {new Date(postData.publishedAt || postData.publishedat).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                <a href="#">{postData.author || "Unknown Author"}</a>
                                            </li>
                                            <li>
                                                <i className="far fa-bookmark"></i>
                                                <a href="#">uncategorized</a>
                                            </li>
                                        </ul>
                                        <div className="post-text">
                                            {postData.content && postData.content.map((block, index) => (
                                                <p key={index}>
                                                    {block.children?.[0]?.text || ""}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-avatar-wrap">
                                    <div className="blog-post-avatar-img">
                                        <Image src="/assets/img/blog/avatar_img.jpg" width={170} height={171} alt="img" />
                                    </div>
                                    <div className="blog-avatar-info">
                                        <span className="designation">Author</span>
                                        <h4 className="name"><a href="#">Morgan Cooper</a></h4>
                                        <p>Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas est omnis dolor repellendus.</p>
                                    </div>
                                </div>
                                <div className="comment-wrap">
                                    <div className="comment-form-title">
                                        <h4 className="title">Comments (1)</h4>
                                    </div>
                                    <div className="latest-comments">
                                        <div className="comments-box">
                                            <div className="comments-avatar">
                                                <Image src="/assets/img/blog/comment_avatar01.jpg" width={110} height={110} alt="img" />
                                            </div>
                                            <div className="comment-text">
                                                <span className="date">3 mar 2023</span>
                                                <h5 className="name"><a href="#">Harry Peterson</a></h5>
                                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                                <Link href="#" className="reply-link">Reply</Link>
                                            </div>
                                        </div>
                                        <div className="comments-box children">
                                            <div className="comments-avatar">
                                                <Image src="/assets/img/blog/comment_avatar02.jpg" width={110} height={110} alt="img" />
                                            </div>
                                            <div className="comment-text">
                                                <span className="date">3 mar 2023</span>
                                                <h5 className="name"><a href="#">Kiara Montesino</a></h5>
                                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus omnis voluptas assumenda est, omnis dolor repellendus.</p>
                                                <Link href="#" className="reply-link">Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-comment-form">
                                    <div className="comment-respond">
                                        <div className="comment-form-title">
                                            <h4 className="title">Leave a Reply</h4>
                                        </div>
                                        <form onSubmit={e => e.preventDefault()} className="comment-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="comment-field">
                                                        <input type="text" placeholder="Your full name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="comment-field">
                                                        <input type="email" placeholder="Your email address" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-field">
                                                <textarea name="message" placeholder="Write your review..."></textarea>
                                            </div>
                                            <button type="submit" className="btn">
                                                <span className="text">Send message</span>
                                                <span className="shape"></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <BlogSidebar />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default BlogDetailsArea;