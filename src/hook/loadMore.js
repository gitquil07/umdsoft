function loadMore(countPerPage){
  let totalAmountOfPosts = 0;
  this.accumulatedPosts = [];
  this.countPerPage = countPerPage;
  this.start = 0;

  this._startParamName = "_start";
  this._limitParamName = "_limit";
  this._oncomplete = '';
  this._onloading = '';
  this._onsuccess = '';
  this._onerror = '';
  this._url = '';

  function isString(str){
    if(str.trim() == "" || typeof str !== "string"){
      return false;
    }
    return true
  }

  this.makeRequest = async function(...rest){
    let url = new URL(this._url),
        urlParams = url.searchParams;
    
    if(rest.length != 0){
      let [startValue, limitValue] = rest;
      urlParams.set(this._startParamName, startValue);
      urlParams.set(this._limitParamName, limitValue);
    }

    try{
      let response = await fetch(url);

      if(response.status == 200){
        let posts = await response.json();

        if(rest.length != 0){
          return posts;
        }

        if(rest.length == 0){
          totalAmountOfPosts = posts.length;
        }

      }else{
        return null;
      }
    }catch(err){
      throw new Error('Error connection');
    }

  }

  this.getTotalAmountOfPosts = function(){
    this.makeRequest();
  };


  this.load = function(setPosts, showPosts){
    if(this._onloading != ''){
      this._onloading();
    }else{
      console.log("loading");
    }

    // Try to get posts and accumulate them into acumullated posts private variable
    this.makeRequest(this.start, this.countPerPage)
      .then(posts => {
          this.accumulatedPosts.push(...posts);
          console.log(this.accumulatedPosts);
          setPosts();
          showPosts();
          return this.accumulatedPosts;
      })
      .then(accumulatedPosts => {
        if(accumulatedPosts.length == totalAmountOfPosts){
          if(this._oncomplete != ''){
            this._oncomplete();
          }
        }else{

          if(totalAmountOfPosts - this.start > this.countPerPage){
            this.start += this.countPerPage;
  
            if(this._onsuccess != ''){
              this._onsuccess();
            }else{
              console.log("success");
            }
  
          }else{
            this.countPerPage = totalAmountOfPosts - this.start;
          }
        }


      })
      .catch(error => {
        if(this._onerror != ''){
          this._onerror();
        }
      });

    }

    
  // Getter and setter for url
  this.setUrl = function(url){
    if(isString(url)){
      this._url = url;
    }else{
      throw new Error('Invalid url');
    }

  }

  this.getUrl = function(url){
    return this._url;
  }


  // Getter and seter for start param
  this.setStartParamName = function(name){
    if(!isString(name)){
      throw new Error('Invalid param name');
    }

    this._startParamName = name; 
  }

  this.getStartParamName = function(){
    return this._stratParamName;
  }


  this.setLimitParamName = function(name){
    if(!isString(name)){
      throw new Error('Invalid param name');
    }

    this._limitParamName = name;
  }

  this.getLimitParamName = function(){
    return this._limitParamName;
  }

  this.setOnloading = function(callback){
    if(typeof callback == "function"){
      this._onloading = callback;
    }
  }

  this.setOnsuccess = function(callback){
    if(typeof callback == "function"){
      this._onsuccess = callback;
    }
  }

  this.setOncomplete = function(callback){
    if(typeof callback == "function"){
      this._oncomplete = callback;
    }
  }

  this.setOnerror = function(callback){
    if(typeof callback == "function"){
      this._onerror = callback;
    }
  }
}

export {loadMore};
