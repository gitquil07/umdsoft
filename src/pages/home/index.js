import React from 'react'
import Banner from '../../component/banner/banner'
import Courses from './courses/courses'
import StudyTypes from './studyTypes/studyTypes'
import { Container } from 'react-bootstrap'
import SuccessAcademy from './successAcademy/successAcademy'
import Sponsors from './sponsors/sponsors'

class Home extends React.Component {
    render() {
        return (
            <div id='after__header' className='after__header bg-light'> 
                <Banner title="Dasturlashni qulay muhitda o'rganing" text="Dasturlash sohasida eng rivojlangan va talabi yuqori bo'lgan kurslardan birini tanlang. Kurs davomida portfolio to'plash, rezyume hosil qilish va ish topishingizga esa biz yordam beramiz."/>
                <Container>
                    <StudyTypes />
                    <Courses />
                    <SuccessAcademy />
                    <Sponsors />
                </Container>
            </div>
        )
    }
}

export default Home