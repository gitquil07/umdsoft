import React from 'react';
import Success from './success/success';
import Courses from './courses/courses';
import Advices from './advices/advices';
import { Container } from 'react-bootstrap';
import { Feedback } from '../../component';
import { ItemContainer } from '../../component';
import Banner from '../../component/banner/banner'


class OnlineRep extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
        <Banner title="Talaba bo'lishni istaysizmi? Success onlayn repetiror ko'maklashadi." text="Hozirgi kunda talaba bo'lishni istayotgan yoshlar soni ortib bormaqda. Karantin sababli o'quv markazlari yopilgan lekin bundan xovotir olmasangiz bo'ladi. Biz sizga ko'maklashamiz. Succes onlayn repetitor platformasi orqali barchasi juda oson." />
        <Container>
          <Courses />
          <Success />
          <Advices />
          <ItemContainer title="Bitiruvchi fikri">
            <Feedback/>
          </ItemContainer>
        </Container>
      </>
    );
  }

}

export default OnlineRep;