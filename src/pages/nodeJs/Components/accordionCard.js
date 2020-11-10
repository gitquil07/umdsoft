import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import st from '../nodeJs.module.css'

export default class AccordionCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {isOpen: false}
    }


    rotate = (e) => {
        this.setState({isOpen: !(this.state.isOpen)})
    }

    render() {
        return(
            <Card className={`${st.round} border-0 mb-4`}>
                <Card.Header className='px-4 pb-0 bg-white border-bottom-0'>
                    <p className={st.block__p}>Раздел 1</p>
                    <h4 className={st.block__h4}>Знакомство с платформой</h4>
                    <p className={st.block__p}>Познакомимся с основами Node.js, настроим редактор кода для отладки и обсудим особенности программирования на стороне сервера. Научимся создавать и запускать приложения в консоли, передавать им параметры. Познакомимся с практической стороной отладки.</p>
                    <Accordion.Toggle as={Button}  variant="link" eventKey={this.props.eventKey} className='bg-white text-success' style={{float: 'right'}}>
                            <i style={{fontSize: '25px'}} onClick={e => this.rotate(e)} className={`fas arrow ${this.state.isOpen? 'fa-arrow-circle-up' : 'fa-arrow-circle-down'} `}></i>
                    </Accordion.Toggle>
                    
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.eventKey} id='accCardCollId'>
                    <Card.Body className='pt-0 d-flex justify-content-between'>
                        <div>
                            <h4 className={st.block__h4}>Основы Node.js.<br /><br /> Модули. </h4>
                            <p className={st.block__p}>- Введение в модули;</p>
                            <p className={st.block__p}>- Встроенные модули;</p>
                            <p className={st.block__p}>- Менеджер пакетов npm;</p> <br />
                            <h4 className={st.block__h4}>Command Line Interface. <br /><br /> Отладка приложения.</h4>
                            <p className={st.block__p}>- Отладка в редакторе;</p>
                            <p className={st.block__p}>- Отладка в консоли.</p>
                        </div>
                        <img 
                            src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
                            className={`mr-5 ${st.node_logo}`}
                            style={{opacity: '.5'}}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}