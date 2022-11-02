import React from "react";
import "./blogPost.css";
import { useParams } from 'react-router-dom'
import * as posts from "../../data/blog.json";
import { AiOutlineUser, AiOutlineFolder } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

const baseUrl = "https://cdn2.vapetasia.com/img/blog/";

const BlogPost = () => {
  const { slug } = useParams();
  let post = null;
  let recentPosts = [];
  posts.default.map(p => {
    if (p.post_slug === slug) {
      post = p;
    }
    if (recentPosts.length < 5) {
      recentPosts.push(p);
    }
  });
  console.log(recentPosts);
  if (post) {
    return (
      <>
        <div id="blog-page" className="container">
          <div className="post-content">
            <div className="post">
              <header className="post-header">
                <h2 className="single-post-title">
                  {post.post_title}
                </h2>
              </header>
              <hr />
              <span className="author-heading">
                <h5>
                  <AiOutlineUser /> {post.author}
                </h5>
                -
                <h5>
                  <MdDateRange />
                  {post.post_date}
                </h5>
                -
                <h5>
                  <AiOutlineFolder />
                  {post.category}
                </h5>
              </span>
              <hr />
              <div className="post-banner">
                <img src={baseUrl + post.banner} alt="" />
              </div>
              <div className="post-paragraph">
                <p
                  dangerouslySetInnerHTML={{ __html: post.body }}
                ></p>
              </div>
            </div>
          </div>
          <div className="post-sidebar">
            <ul>
              <h2>Recent Posts</h2>
              <hr />
              {recentPosts.map(p => {
                return <li key={"recent_" + p.post_slug}>
                  <a
                    href={
                      process.env.REACT_APP_BASE_URL +
                      "/blog/" +
                      p.post_slug
                    }
                  >
                    {p.post_title}
                  </a>
                </li>
              })}
            </ul>
            <div className="post-archives">
              <ul>
                <h2>Archives</h2>
                <li>January 2021</li>
                <li>December 2020</li>
                <li>November 2020</li>
                <li>October 2020</li>
                <li>Septemper 2020</li>
              </ul>
            </div>
            <div className="post-categories">
              <ul>
                <h2>Categories</h2>
                <li>Vapetasia News</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>Post not found</div>
  }
};

export default BlogPost;