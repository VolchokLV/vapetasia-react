import React from "react";
import "./post.css";
import * as posts from "../../data/blog.json";
import { AiOutlineUser, AiOutlineFolder } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

const baseUrl = "https://cdn2.vapetasia.com/img/blog/";

const Post = (props) => {
  return (
    <>
      <div id="blog-page" class="container">
        <div class="post-content">
          <div className="post">
            <header className="post-header">
              <h2 className="single-post-title">
                {posts.default[1]["post_title"]}
              </h2>
            </header>
            <hr />
            <span className="author-heading">
              <h5>
                <AiOutlineUser />
                {posts.default[1]["author"]}
                <MdDateRange />
                {posts.default[1]["post_date"]}
                <AiOutlineFolder />
                {posts.default[1]["category"]}
              </h5>
            </span>
            <hr />
            <div className="post-banner">
              <img src={baseUrl + posts.default[1]["banner"]} alt="" />
            </div>
            <div className="post-paragraph">
              <p
                dangerouslySetInnerHTML={{ __html: posts.default[1]["body"] }}
              ></p>
            </div>
          </div>
        </div>
        <div class="post-sidebar">
          <ul>
            <h2>Recent Posts</h2>
            <hr />
            <li>
              <a
                href={
                  process.env.REACT_APP_BASE_URL +
                  "/blog/" +
                  posts.default[0]["post_slug"]
                }
              >
                {posts.default[0]["post_title"]}
              </a>
            </li>
            <hr />
            <li>
              <a
                href={
                  process.env.REACT_APP_BASE_URL +
                  "/blog/" +
                  posts.default[1]["post_slug"]
                }
              >
                {posts.default[1]["post_title"]}
              </a>
            </li>
            <hr />
            <li>Sidebar items</li>
            <hr />
            <li>Sidebar items</li>
            <hr />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Post;
