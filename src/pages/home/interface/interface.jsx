import React, { useEffect, useState } from 'react';
import { ItemContainer } from '../../../component';
import Briliant from "../../../svg/briliant.svg";
import Interface from "../../../svg/interface.svg";
import "./interface.css";

const Slider = () => {
  
  // Slides amount
  const MAX_LENGTH = 5;

  // Current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    show(currentSlide);
  });

  const show = (currentId) => {
    let sliderTexts = document.querySelectorAll('.slider-text'),
        sliderImages = document.querySelectorAll('.slider-img'),
        indicators = document.querySelectorAll('.indicator');

    // Remove active from all
    hide(sliderTexts);
    hide(sliderImages);
    toDefault(indicators);

    // Show active
    for(let i = 0; i < sliderImages.length; i++){
      if(i == currentId){
        sliderImages[i].classList.add('animate__fadeIn');
        sliderImages[i].classList.add('activeImg');

        sliderTexts[i].classList.add("animate__fadeIn");
        sliderTexts[i].classList.add("activeText");
        activateIndicator(indicators, indicators[i]);
        break;
      }
    }

  }

  const hide = (slideElems) => {
    slideElems.forEach(elem => {
      elem.classList.remove('animate__fadeIn');
      if(elem.classList.contains('activeImg')){
        elem.classList.remove('activeImg');
      }
      if(elem.classList.contains('activeText')){
        elem.classList.remove('activeText');
      }
    });
  }


  const toDefault = (indicators) => {
    indicators.forEach(indicator => {
      if(indicator.classList.contains('actiVe')){
        indicator.classList.remove('actiVe');
      }
    });
  }

  const activateIndicator = (indicators, current) => {
    indicators.forEach(indicator => {
      if(indicator == current){
        indicator.classList.add('actiVe');
      }
    });
  }

  // Handlers next 
  const next = (e) => {
    console.log(e);
    e.preventDefault();
    if(currentSlide < MAX_LENGTH){
      setCurrentSlide(currentSlide + 1);
      show(currentSlide);
    }
    if(currentSlide == 4){
      show(0);
      setCurrentSlide(0);
    }
  }

  const prev = (e) => {
    e.preventDefault();
    if(currentSlide > 0){
      setCurrentSlide(currentSlide - 1);
      show(currentSlide);
    }
    if(currentSlide == 0){
      show(MAX_LENGTH - 1);
      setCurrentSlide(MAX_LENGTH - 1);
    }
  }

  const current = (e) => {
    let indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, i) => {
      if(indicator == e.target){
        show(i);
      }
    })
  }

  return (
    <ItemContainer title="Foydalanuvchi interfeysi">
      <div className="slider">
        <div className="slider-desc-container">
          <div className="slider-texts">
            <div className="slider-text animate__animated">
              <img src={Briliant} className="text-img"/>
              <p>LMS tizimi - Har bir talaba uchun shaxsiy 
  kabinet mavjud bo’lib, bunda o’quv jarayonidagi 
  barcha ma’lumotlarni ushbu yagona tizim 
  orqali kuzatishlari mumkin</p>
            </div>
            <div className="slider-text animate__animated">
              <img src={Briliant} className="text-img"/>
              <p>When true, the trailing slash on a location’s 
                pathname will be taken into consideration when 
                determining if the location matches the current
                URL. See the Route strict
                documentation for more information.
              </p>
            </div>
            <div className="slider-text animate__animated">
              <img src={Briliant} className="text-img"/>
              <p>A function to add extra logic for determining 
                whether the link is active. This should be used
                if you want to do more than verify that the 
                link’s pathname matches the current 
                URL’s pathname.
              </p>
            </div>
            <div className="slider-text animate__animated">
              <img src={Briliant} className="text-img"/>
              <p>
                The isActive compares the current history location 
                (usually the current browser URL). To compare to
                a different location, a location can be passed.
              </p>
            </div>
            <div className="slider-text animate__animated">
              <img src={Briliant} className="text-img"/>
              <p>
                An array of locations in the history stack. 
                These may be full-blown location objects
                with pathname, search, hash, state or 
                simple string URLs.
              </p>
            </div>
          </div>
          <div className="navigation">
            <div className="slider-indicators">
              <span onClick={e => current(e)} className="indicator"></span>
              <span onClick={e => current(e)} className="indicator"></span>
              <span onClick={e => current(e)} className="indicator"></span>
              <span onClick={e => current(e)} className="indicator"></span>
              <span onClick={e => current(e)} className="indicator"></span>
            </div>
            <div className="slider-switchers">
              <a href="#" className="prev" onClick={e => prev(e)}></a>
              <a href="#" className="next" onClick={e => next(e)}></a>
            </div>
          </div>
        </div>
        <div className="slider-img-container">
          <img src={Interface} className="slider-img animate__animated"/>
          <img src={Interface} className="slider-img animate__animated"/>
          <img src={Interface} className="slider-img animate__animated"/>
          <img src={Interface} className="slider-img animate__animated"/>
          <img src={Interface} className="slider-img animate__animated"/>
        </div>
      </div>
    </ItemContainer>
  );
}

export default Slider;