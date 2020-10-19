import React from 'react'
import Banner from '../../component/banner/banner'
import Courses from './courses/courses'
import StudyTypes from './studyTypes/studyTypes'
import { Container } from 'react-bootstrap'
import SuccessAcademy from './successAcademy/successAcademy'
import Sponsors from './sponsors/sponsors'
import Interface from './interface/interface'

class Home extends React.Component {
    render() {
        return (
            <> 
                <Banner title="Dasturlashni qulay muhitda o'rganing" text="Dasturlash sohasida eng rivojlangan va talabi yuqori bo'lgan kurslardan birini tanlang. Kurs davomida portfolio to'plash, rezyume hosil qilish va ish topishingizga esa biz yordam beramiz."/>
                <Container id='container'>
                    <StudyTypes />
                    <Courses />
                    <Interface />
                    <SuccessAcademy />
                    <Sponsors />
                </Container>
            </>
        )
    }
}

export default Home