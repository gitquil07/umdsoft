import React from "react";
import BlogItem from "./blogItem";
import "./blog.css";
import { ItemContainer } from '../../component';

const posts = [
  {
    id: 0,
    author:"Ashley Ritz",
    postImg:"post.png",
    title:"How My Experience Using MongoDB Inspired My First Book",
    intro:" remember being at a MongoDB event in Paris where they presented replication and sharding. I was blown away by both the implementation and the potential for scaling.",
    date:"20 octomber, 2020",
    authorImg:"user-profile.svg",
    views:23,
  },
  {
    id: 1,
    author:"Ashley Ritz",
    postImg:"post.png",
    title:"How My Experience Using MongoDB Inspired My First Book",
    intro:" remember being at a MongoDB event in Paris where they presented replication and sharding. I was blown away by both the implementation and the potential for scaling.",
    date:"20 octomber, 2020",
    authorImg:"user-profile.svg",
    views:23,
  },
  {
    id: 2,
    author:"Ashley Ritz",
    postImg:"post.png",
    title:"How My Experience Using MongoDB Inspired My First Book",
    intro:" remember being at a MongoDB event in Paris where they presented replication and sharding. I was blown away by both the implementation and the potential for scaling.",
    date:"20 octomber, 2020",
    authorImg:"user-profile.svg",
    views:23,
  },
   {
    id: 3,
    author:"Ashley Ritz",
    postImg:"post.png",
    title:"How My Experience Using MongoDB Inspired My First Book",
    intro:" remember being at a MongoDB event in Paris where they presented replication and sharding. I was blown away by both the implementation and the potential for scaling.",
    date:"20 octomber, 2020",
    authorImg:"user-profile.svg",
    views:23,
  },
  {
    id: 4,
    author:"Ashley Ritz",
    postImg:"post.png",
    title:"How My Experience Using MongoDB Inspired My First Book",
    intro:" remember being at a MongoDB event in Paris where they presented replication and sharding. I was blown away by both the implementation and the potential for scaling.",
    date:"20 octomber, 2020",
    authorImg:"user-profile.svg",
    views:23,
  },
  {
    id: 5,
    author:"Ashley Ritz",
    postImg:"post.png",
    title:"How My Experience Using MongoDB Inspired My First Book",
    intro:" remember being at a MongoDB event in Paris where they presented replication and sharding. I was blown away by both the implementation and the potential for scaling.",
    date:"20 octomber, 2020",
    authorImg:"user-profile.svg",
    views:23,
  },
];

const Blog = () => {
  return(
    <div className="posts">
      <div className="posts-container">
        {
          posts.map(post => {
            return <BlogItem key={post.id} post={post}/>
          })
        }
      </div>
      <a href="" className="posts-load">load more</a>
    </div>
  );
}

export default Blog;