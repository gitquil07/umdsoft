import React from "react";
import BlogItem from './blogItem';

const Blogs = ({posts}) => {
  return(
    <>
      {
        posts.map(post => <BlogItem key={post.id} post={post}/>)
      }
    </>
  );
}

export default Blogs;