import React, { useState, useEffect } from "react";
import './feedbacks.css';
import avatar from "../../svg/user-profile.svg";

const Feedback = () => {

  let [currentFeedback, setCurrentFeedback] = useState(0);
  const MAX_LENGTH = 3;

  useEffect(() => {
    show(currentFeedback);
  });

  const show = (current) => {
    let feedbacks = document.querySelectorAll('.feedback-slide'),
        rates = document.querySelectorAll('.students-rate');

    removeAnimating(feedbacks);
    removeRates(rates);
    
    for(let i = 0; i < feedbacks.length; i++){
      if(i == current){
        feedbacks[i].classList.add('fadeInFeedback');
        feedbacks[(i > 0)? i-1 : MAX_LENGTH - 1].classList.add('fadeOutFeedback');
        
        // rates[i].classList.add('activeFeedback');
        rates[i].classList.add('fadeInRate');
        rates[(i > 0)? i-1 : MAX_LENGTH - 1].classList.add('fadeOutRate');
      }
    }
  }

  const removeAnimating = (feedbacks) => {
    feedbacks.forEach(feedback => {
      if(feedback.classList.contains('fadeInFeedback')){
        feedback.classList.remove('fadeInFeedback');
      }
      if(feedback.classList.contains('fadeOutFeedback')){
        feedback.classList.remove('fadeOutFeedback');
      }
    });
  }

  const removeRates = (rates) => {
    rates.forEach(rate => {
      if(rate.classList.contains('fadeInRate')){
        rate.classList.remove('fadeInRate');
        // rate.classList.remove('activeFeedback');
      }
      if(rate.classList.contains('fadeOutRate')){
        rate.classList.remove('fadeOutRate');
      }
    });
  }

  const next = () => {
    if(currentFeedback < (MAX_LENGTH - 1)){
      setCurrentFeedback(currentFeedback + 1);
      show(currentFeedback);
    }

    if(currentFeedback == (MAX_LENGTH - 1)){
      setCurrentFeedback(0);
      show(currentFeedback);
    }

  }

  return(
    <>
      <p>Bizning bitiruvchilarimiz hozirgi kunda mamlakatimizdagi TOP 5 IT kompaniyalarida ishlab o'z tajribalari va 
bilimlari bilan maqtanib kelmoqda</p>
      <div className="feedbacks">
        <div className="feedback-container">
          <div className="feedback-slides">
            <div className="feedback-slide">
              <div className="feedback">
                  Assalomu aleykum! Men 2020 yil ushbu akademiyani 
                  muvaffaqiyatli bitirdim va sertifikat sohibiga
                  aylandim. Mana hozirgi kunda yurtimizdagi 
                  eng ilg'or IT kompaniyada yetakchi dasturchi
                  bo'lib ishlab kelmoqdaman. Sizlarga raxmat
                  aytmoqchiman. Hammasi uchun raxmat 
                  SUCCESS ACADEMY.
              </div>
            </div>
            <div className="feedback-slide">
              <div className="feedback">
                  Animate.css is a library of ready-to-use, 
                  cross-browser animations for use in your 
                  web projects. Great for emphasis, home 
                  pages, sliders, and attention-guiding
                  hints.
              </div>
            </div>
            <div className="feedback-slide">
              <div className="feedback">
                  Animations can improve the UX of an interface, 
                  but keep in mind that they can also get in the
                  way of your users! Please read the best 
                  practices and gotchas sections to bring 
                  your web-things to life in the best 
                  way possible.
              </div>
            </div>
          </div>
          <span className="next-feedback" onClick={next}></span>
          <div className="feedback-rates">
            <div className="students-rate">
              <img src={avatar} className="student-avatar" alt="user"/>
              <div className="rate">
                <span>Raximov Shaxzod</span>
                <div>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                  <span>4/5</span>
                </div>
              </div>
            </div>
            <div className="students-rate">
              <img src={avatar} className="student-avatar" alt="user"/>
              <div className="rate">
                <span>Anvarov Alisher</span>
                <div>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                  <span>4/5</span>
                </div>
              </div>
            </div>
            <div className="students-rate ">
              <img src={avatar} className="student-avatar" alt="user"/>
              <div className="rate">
                <span>Rahmatov Sherzod</span>
                <div>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 fas fa-star col__gold"></i>
                  <i role='button' className="svg__size mr-1 far fa-star col__gold"></i>
                  <span>4/5</span>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Feedback;