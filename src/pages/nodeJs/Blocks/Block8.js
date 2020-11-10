import React, {useContext} from 'react'
import { Accordion, Card, Button, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import AccordionCard from '../Components/accordionCard'
import st from '../nodeJs.module.css'

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
      );
    
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
        <Accordion.Toggle as={Button} onClick={decoratedOnClick} variant="link" className='bg-white col__blue' style={{float: 'right'}}>
             <i style={{fontSize: '25px'}} className={`fas arrow ${isCurrentEventKey? 'fa-arrow-circle-up' : 'fa-arrow-circle-down'} `}></i>
        </Accordion.Toggle>
    );
  }

class Block8 extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {isOpen: false}
    }


    render() {
        return(  
             <div className={st.section}>
                 <h1 className={`${st.w1} ${st.block__h1} mb-3`}>Kurs dasturi</h1>

                
                    <Accordion defaultActiveKey="0"  className='text-left'>
                        <Card className={`${st.round} border-0 mb-4`}>
                            <Card.Header className='px-4 pb-0 bg-white border-bottom-0'>
                                <p className={st.block__p}>Раздел 1</p>
                                <h4 className={st.block__h4}>Знакомство с платформой</h4>
                                <p className={st.block__p}>Познакомимся с основами Node.js, настроим редактор кода для отладки и обсудим особенности программирования на стороне сервера. Научимся создавать и запускать приложения в консоли, передавать им параметры. Познакомимся с практической стороной отладки.</p>
                                <ContextAwareToggle eventKey="1"></ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1" id='accCardCollId'>
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
                        <Card className={`${st.round} border-0 mb-4`}>
                            <Card.Header className='px-4 pb-0 bg-white border-bottom-0'>
                                <p className={st.block__p}>Раздел 1</p>
                                <h4 className={st.block__h4}>Знакомство с платформой</h4>
                                <p className={st.block__p}>Познакомимся с основами Node.js, настроим редактор кода для отладки и обсудим особенности программирования на стороне сервера. Научимся создавать и запускать приложения в консоли, передавать им параметры. Познакомимся с практической стороной отладки.</p>
                                <ContextAwareToggle eventKey="2"></ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2" id='accCardCollId'>
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
                        <Card className={`${st.round} border-0 mb-4`}>
                            <Card.Header className='px-4 pb-0 bg-white border-bottom-0'>
                                <p className={st.block__p}>Раздел 1</p>
                                <h4 className={st.block__h4}>Знакомство с платформой</h4>
                                <p className={st.block__p}>Познакомимся с основами Node.js, настроим редактор кода для отладки и обсудим особенности программирования на стороне сервера. Научимся создавать и запускать приложения в консоли, передавать им параметры. Познакомимся с практической стороной отладки.</p>
                                <ContextAwareToggle eventKey="3"></ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3" id='accCardCollId'>
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
                    </Accordion>

             </div>
        )
    }
}

export default Block8