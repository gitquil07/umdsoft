import React, {useRef, useEffect, useState} from "react";
import BlogItem from "./blogItem";
import Blogs from "./blogs";
import "./blog.css";
import { ItemContainer } from '../../component';
import { loadMore } from '../../hook/loadMore';

// const accumulatePosts = [];

  
let ldm = new loadMore(6);
    ldm.setUrl("https://jsonplaceholder.typicode.com/posts");
    
    ldm.getTotalAmountOfPosts();

const Blog = () => {
  const loadMoreBtn = useRef(null);
  // let postsPerPage = 6;

  // let [count, setCount] = useState(0);
  let [posts, setPosts] = useState([]);



  // let totalPostsAmount;
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then(response => response.json())
  //   .then(posts => {  
  //     totalPostsAmount = posts.length;
  //   });

  ldm.setOnloading(function(){
    loadMoreBtn.current.innerHTML = ""; 
    loadMoreBtn.current.setAttribute('disabled', true);
    loadMoreBtn.current.classList.add("post__load-more--loading");
  });

  ldm.setOncomplete(function(){
    loadMoreBtn.current.innerHTML = "load more";
    loadMoreBtn.current.style.cursor = "default";
    loadMoreBtn.current.setAttribute('disabled', true);
    loadMoreBtn.current.classList.remove('post__load-more--loading');
  });

  ldm.setOnsuccess(function(){
    loadMoreBtn.current.classList.remove('post__load-more--loading');
    loadMoreBtn.current.removeAttribute('disabled');
    loadMoreBtn.current.innerHTML = "load more";
  });


  useEffect(() => {
    // let initialLoading = loadMore();
    // initialLoading();
    console.log(posts);
    ldm.load(() => {
      setPosts(ldm.accumulatedPosts);
    }, () => console.log(posts));
  }, []);

  // function loadMore(){
  
  //   return async function(){
  //     if(accumulatePosts.length == totalPostsAmount){
  //       loadMoreBtn.current.innerHTML = "load more";
  //       loadMoreBtn.current.style.cursor = "default";
  //       loadMoreBtn.current.setAttribute('disabled', true);
  //       loadMoreBtn.current.classList.remove('post__load-more--loading');
  //       console.log('ksdjkljdfkl');
  //     }else{
  //       // Loading indicator
  //       loadMoreBtn.current.innerHTML = ""; 
  //       loadMoreBtn.current.setAttribute('disabled', true);
  //       loadMoreBtn.current.classList.add("post__load-more--loading");
    
        
  //       // Lets create url address using URL class
  //       let urlParams = url.searchParams;
  //       // // Set get params to take new data changing offset value
  //       // // passed to _start param
  //       urlParams.set('_start', count);
  //       urlParams.set('_limit', postsPerPage);
        
  //       // let start = Date.now();
  //       let response = await fetch(url, {
  //         headers: {
  //           ContentType: "application/json,charset=utf-8"
  //         }
  //       });
    
  //       if(response.status == 200){
  //         let posts = await response.json();
  
  //         accumulatePosts.push(...posts);
  //         setPosts(accumulatePosts);
  
  //         if((totalPostsAmount - count) > postsPerPage){
  //           setCount((prevCount) => {
  //             return prevCount + postsPerPage;
  //           });
  
  //         }else{
  //           postsPerPage = totalPostsAmount - count;
  //         }
  
  //         // Remove loading indicator after getting posts
  //         loadMoreBtn.current.classList.remove('post__load-more--loading');
  //         loadMoreBtn.current.removeAttribute('disabled');
  //         loadMoreBtn.current.innerHTML = "load more";
  //       }else{
  //         console.log("error");
  //       }
  //     }
  //   }


  function handleClick(){
    ldm.load(() => {
      setPosts(ldm.accumulatedPosts);
    }, () => console.log(posts));
  }

  return(
    <div className="posts">
      <div className="posts-container">
        {
          posts.length? <Blogs posts={posts} /> : ""
        }
      </div>
      <button ref={loadMoreBtn} onClick={handleClick} className="posts-load">load more</button>
    </div>
  );
}

export default Blog;