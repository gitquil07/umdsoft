import React from "react";

const BlogItem = (props) => {
  let {title, body} = props.post;

  return (
    <div className="post-blog">
      <div className="post-blog__section post-blog__section--flex">
        {/* <img src={require(`../../svg/${authorImg}`)}/>  */}
        <img src={require(`../../svg/user-profile.svg`)}/> 
        <div className="author">
          <p className="dark-blue">
            {/* {author} */}
            Author 
          </p>
          {/* <span className="sm-text light-dark">{date}</span> */}
          <span className="sm-text light-dark">25 september 2020</span>
        </div>
      </div>
      {/* <img src={require(`../../img/${postImg}`)} className="post-blog__img"/> */}
      <img src={require(`../../img/post.png`)} className="post-blog__img"/>
      <div className="post-blog__section post-blog__hovered">
        <h6><a className="dark-blue" href="#">{title}</a></h6>
        <p className="sm-text light-dark justify">{body}</p>
        {/* <span className="post-views"><i className="fas fa-eye">&nbsp;</i>{views}</span> */}
      </div>
      <span className="post-views"><i className="fas fa-eye">&nbsp;</i>11k</span>
    </div>
  );
}

export default BlogItem;