import React from 'react';
import Success from './success/success';
import Courses from './courses/courses';
import Advices from './advices/advices';
import { Container } from 'react-bootstrap';
import { Feedback } from '../../component';
import { ItemContainer } from '../../component';


class OnlineRep extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="after__header bg-light">
        <Container>
          <Success />
          <Courses />
         {/* <Advices /> */}
          <ItemContainer title="Bitiruvchi fikri">
            <Feedback/>
          </ItemContainer>
        </Container>
      </div>
    );
  }

}

export default OnlineRep;