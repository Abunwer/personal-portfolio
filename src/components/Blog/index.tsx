import React from 'react';
import { blog } from '../../config/portfolio';

interface BlogPost {
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
}

export default function Blog() {
    return (
        <>
            <article className="blog" data-page="blog">
                <header>
                    <h2 className="h2 article-title">Blog</h2>
                </header>

                <section className="blog-posts">
                    <ul className="blog-posts-list">
                        {blog.posts.map((post: BlogPost, index: number) => (
                            <li className="blog-post-item" key={index}>
                                <a href="#">
                                    <figure className="blog-banner-box">
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            loading="lazy" 
                                        />
                                    </figure>

                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <p className="blog-category">{post.category}</p>
                                            <span className="dot"></span>
                                            <time dateTime={post.date}>{post.date}</time>
                                        </div>

                                        <h3 className="h3 blog-item-title">{post.title}</h3>

                                        <p className="blog-text">
                                            {post.description}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
        </>
    );
}
