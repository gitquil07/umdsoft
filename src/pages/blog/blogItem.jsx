import React from "react";

const BlogItem = (props) => {
  let {title, author, intro, postImg, date, authorImg, views} = props.post;

  return (
    <div className="post-blog">
      <div className="post-blog__section post-blog__section--flex">
        <img src={require(`../../svg/${authorImg}`)}/> 
        <div className="author">
          <p className="dark-blue">{author}</p>
          <span className="sm-text light-dark">{date}</span>
        </div>
      </div>
      <img src={require(`../../img/${postImg}`)} className="post-blog__img"/>
      <div className="post-blog__section post-blog__hovered">
        <h6><a className="dark-blue" href="#">{title}</a></h6>
        <p className="sm-text light-dark justify">{intro}</p>
        <span className="post-views"><i class="fas fa-eye">&nbsp;</i>{views}</span>
      </div>
    </div>
  );
}

export default BlogItem;