import React from "react";
import Post from "../post/post.component";
import { Link } from "react-router-dom";

const WithLinkPost = ({ grid, post }) =>
  grid ? (
    <Link to={`/post/${post.id}`}>
      <Post grid={grid} post={post} />
    </Link>
  ) : (
    <Post grid={grid} post={post} />
  );

export default WithLinkPost;
