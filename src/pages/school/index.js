import React from 'react' 
import { Container, Tabs, Tab } from 'react-bootstrap'
import Banner from '../../component/banner/banner'
import Projects from './projects/projects'
import OnlineSeminar from './onlineSeminar/onlineSeminar'

import './index.css'


class OnlineSchool extends React.Component {


    render() {
        return(
            <div id='after__header' className='after__header bg-light'>
                <Banner title={'Onlayn maktab - barcha uchun!'} text={"Uyda dars berish va o'qish qobiliyati - samarali va qulay. Success School foydali va bepul manbalar va masofaviy ta'lim uchun xizmatlarni o'z ichiga oladi. Bolalar, o'qituvchilar va ota-onalar uchun."}/>
                <Container>
                    <div className='py-5'>
                        <Tabs className='tabs' defaultActiveKey="projects" id="uncontrolled-tab-example">
                            <Tab eventKey="projects" className='' title="BARCHA FANLAR">
                                <Projects />
                            </Tab>
                            <Tab eventKey="onlineSeminar" title="ONLINE SEMINAR">
                                <OnlineSeminar />
                            </Tab>
                            <Tab eventKey="tasks" title="MASHG'ULOTLAR">
                                <Projects />
                            </Tab>
                        </Tabs>
                    </div>

                </Container>
            </div>
        )
    }
}

export default OnlineSchool