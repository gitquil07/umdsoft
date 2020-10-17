import React from "react";
import { ItemContainer } from '../../../component';
import SuccessItem from './successItem';
import './success.css';

const successElements = [
  {
    id:0,
    title:"Individual ta'lim",
    text:"Kerakli o'quv kurslarnini tanlab mustaqil onlayn repetitor orqali tayyorlov kursini tamomlang",
  },
  {
    id:1,
    title:"Rivojlanish",
    text:"Belgilangan muddatda bilimlarga ega bo'ling va rivojlaning",
  },
  {
    id:2,
    title:"Ishonch",
    text:"Bilim olishingizga ishonch hosil qiling va sizni qiziqtirgan kelajak kasbingizni egalang",
  },
  {
    id:3,
    title:"Bilimlar manbai",
    text:"Kurslar davomida bilimlaringizni oshirib boring va hech nimadan qo'rqmay marraga chiqing",
  },
  {
    id:4,
    title:"Onlayn testlar",
    text:"O'quv kurslari so'ngida bilimlaringizni tekshirib boring",
  },
  {
    id:5,
    title:"Natija",
    text:"Bilim olishingizga ishonch hosil qiling va sizni qiziqtirgan kelajak kasbingizni egalang",
  },
];

const Success = () => {
  return (
    <ItemContainer title="Success effekti">
      <div className="success-container">
        {
          successElements.map(element =>
            <SuccessItem key={element.id} title={element.title} text={element.text} img={element.imgUrl}></SuccessItem>
          )
        }
      </div>
    </ItemContainer>
  );
}

export default Success;