"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPosts } from "@/services/blogService";

const sidebar_list = [
    { text: "Design", number: 12 },
    { text: "Finance", number: 14 },
    { text: "inTech", number: 18 },
    { text: "Marketing", number: 26 },
    { text: "News", number: 19 },
    { text: "Office", number: <>08</> },
];

const tag = ["uncategorized", "security", "Cyber", "Development", "Digital", "Marketing", "Innovation"];

const BlogSidebar = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData = await getPosts();
                setPosts(postsData);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="col-xl-4 col-lg-5 col-md-10">
                <aside className="blog-sidebar">
                    <div className="text-center py-3">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }

    if (error) {
        return (
            <div className="col-xl-4 col-lg-5 col-md-10">
                <aside className="blog-sidebar">
                    <div className="alert alert-danger">
                        Error loading posts: {error}
                    </div>
                </aside>
            </div>
        );
    }

    return (
        <div className="col-xl-4 col-lg-5 col-md-10">
            <aside className="blog-sidebar">
                <div className="widget">
                    <div className="sidebar-search-form position-relative">
                        <form onSubmit={e => e.preventDefault()}>
                            <input type="text" placeholder="Search here..." />
                            <button><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>

                <div className="widget">
                    <h4 className="widget-title">Explore Categories</h4>
                    <ul className="list-wrap">
                        {sidebar_list.map((li, i) => (
                            <li key={i}>
                                <Link href="#">{li.text}</Link>
                                <span className="float-right">{li.number}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="widget">
                    <h4 className="widget-title">Recent Posts</h4>
                    <div className="rc-post-wrap">
                        {posts.slice(0, 10).map((post) => {
                            const postData = post.attributes || post;
                            const imageUrl = postData.coverImage?.data?.attributes?.url ||
                                postData.coverImage?.url;
                            const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}` : null;

                            return (
                                <div key={post.id} className="rc-post-item d-flex align-items-center gap-3 mb-3">
                                    <div className="rc-post-thumb flex-shrink-0">
                                        <Link href={`/blog-details/${postData.slug}`}>
                                            {fullImageUrl ? (
                                                <img
                                                    src={fullImageUrl}
                                                    alt={postData.coverImage?.data?.attributes?.alternativeText ||
                                                        postData.coverImage?.alternativeText ||
                                                        postData.title}
                                                    className="img-fluid"
                                                    style={{ width: '100%', height: '80px' }}
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
                                    <div className="rc-post-content flex-grow-1">
                                        <h5 className="title mb-1">
                                            <Link href={`/blog-details/${postData.slug}`}>
                                                {postData.title}
                                            </Link>
                                        </h5>
                                        <span className="date text-muted small">
                                            <i className="far fa-calendar-alt me-1"></i>
                                            {new Date(postData.publishedAt || postData.publishedat).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="widget">
                    <h4 className="widget-title">Popular Tags</h4>
                    <div className="tagcloud">
                        {tag.map((tagItem, index) => (
                            <Link key={index} href="#">{tagItem}</Link>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default BlogSidebar;