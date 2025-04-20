"use client";
import { useEffect, useState } from "react";
import { getPostBySlug } from "@/services/blogService";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/common/breadcrumb";
import BlogSidebar from "@/components/blogs/blog-standard/blog-sidebar";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = ({ params }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const postData = await getPostBySlug(params.slug);
                setPost(postData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadPost();
    }, [params.slug]);

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
                <h2>Post not found</h2>
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
                    title="Blog Details"
                    sm_title="Blog Details"
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
                                            <li><i className="far fa-calendar-alt"></i>{new Date(postData.publishedAt || postData.publishedat).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })} </li>
                                            <li><i className="far fa-user"></i><a href="#">{postData.author}</a></li>
                                            <li><i className="far fa-bookmark"></i><a href="#">uncategorized</a></li>
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
                            </div>
                            <BlogSidebar />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default BlogDetails;