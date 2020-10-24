import React, {useState, useEffect, useRef} from "react";

const ResultsItem  = ({name, description, icon, lastSession, score}) => {
  let [elem, setElem] = useState(0); 
  let currentProgress = useRef(null);

  useEffect(() => {
    let width = document.querySelector('.result-item').offsetWidth;
    currentProgress.current.style.width = ((score / 10) * width) + "px";

    currentProgress.current.addEventListener('mouseover', function(e){
      e.target.nextElementSibling.style.display = "block";
    });

    currentProgress.current.addEventListener('mouseout', function(e){
      e.target.nextElementSibling.style.display = "none";
    });

    currentProgress.current.addEventListener('mousemove', function(e){
      let percentContainer = e.target.nextElementSibling;
          percentContainer.style.left = (e.clientX - e.target.parentElement.offsetLeft) - 15 + "px"; 
    });


  }, []);

  return (
    <div className="result-item">
      <div className="result-block passed-course">
        <div>
          <img src={require(`../../../svg/${icon}.svg`)} />
          <div>
            <a href="#"><span>{name}</span>{description ? ` (${description})` : ""}</a>
            <div className="course-status">{(!isNaN(lastSession))? `${lastSession} kun oldin` : "boshlanmadi"}</div>
          </div>
        </div>
        <div className="result">
          <span>{score}</span>
          <br />
          Natija
        </div>
      </div>
      <div className="zero-progress">
        <div className="current-progress" ref={currentProgress}></div>
        <div className="percent-container">
          <div className="percent">{`${(score * 10)}%`}</div>
        </div>
      </div>
      <div className="result-block re-pass">
        <a href="#">Qayta topshirish</a>
        <button className="rest">
          <span className="dots"></span>
          <span className="dots"></span>
          <span className="dots"></span>
        </button>
      </div>
    </div>
  );
}

export default ResultsItem;