import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
import {Accordion, AccordionCollapse, AccordionToggle, ProgressBar, Tab, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaAngleDown, FaClock, FaCss3Alt, FaPlayCircle, FaStar} from "react-icons/all";
import './main.css'


const mql = window.matchMedia(`(min-width: 900px)`);

class TabsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false,
            sideNavLeft: false,
            eventKey:60,
            isBarsOpen: false,
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    mediaQueryChanged() {
        this.setState({sidebarDocked: mql.matches, sidebarOpen: false});
    }
    render() {
        return (
            <div>
                <Row md={12}>
                    <Col md={12} sm={12} className="">
                        <Tabs defaultActiveKey="description" id="online-kurs-tabs">
                            <Tab eventKey="description" title="Description" enabled tabClassName={mql.matches?"btn":"btn btn-block"}>
                                <ol>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptates.</li>
                                    <li><p>Lorem ipsum doset, consectetur adipisicing elit. Ab aperiam dignissimos recusandae, soluta tempore vero.</p></li>
                                    <li><p>sLorem ipslor sit amet, consectetur pisicing elit. Ab aperiam dignissimos recusandae, soluta </p></li>
                                    <li><p>qLorem ipsum dolor sit amet, consectetur adipisicing elit. Ab recusandae, soluta tempore vero.</p></li>
                                </ol>
                            </Tab>

                            <Tab eventKey="home" title="Home" tabClassName={mql.matches?"btn":"btn btn-block"}>

                                <Table className="table table-info">
                                    <thead className="bg-white"><h2><p>kirish</p></h2></thead>
                                    <tbody>
                                    <ol>
                                        <li className="mt-2">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                        <li className="mt-2 pb-0 mb-0">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                        <li className="mt-2 pb-0 mb-0">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                        <li className="mt-2 pb-0 mb-0">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                    </ol>
                                    </tbody>
                                </Table>

                                <Table className="table table-info">
                                    <thead className="bg-white"><h2><p>kirish</p></h2></thead>
                                    <tbody>
                                    <ol>
                                        <li className="mt-2">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                        <li className="mt-2 pb-0 mb-0">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                        <li className="mt-2 pb-0 mb-0">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                        <li className="mt-2 pb-0 mb-0">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                    </ol>
                                    </tbody>
                                </Table>

                                <Table className="table table-info">
                                    <thead className="bg-white"><h2><p>kirish</p></h2></thead>
                                    <tbody>
                                    <ol>
                                        <li className="mt-2">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                        <li className="mt-2 pb-0 mb-0">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                        <li className="mt-2 pb-0 mb-0">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                        <li className="mt-2 pb-0 mb-0">
                                            <div className="d-inline-block">
                                                <Link to="#">
                                                    <p className="ml-2 mb-0"> <FaPlayCircle/>   what is react?</p>
                                                </Link>
                                            </div>
                                            <p className="float-right pr-3 pb-0  d-inline-block"><FaClock/> 10 minut</p>
                                            <hr/>
                                        </li>
                                    </ol>
                                    </tbody>
                                </Table>
                            </Tab>

                            <Tab eventKey="profile" title="Profile" tabClassName={mql.matches?"btn":"btn btn-block"}>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <CardHeader>
                                            <AccordionToggle as={Button} className="btn btn-info btn-block" variant="link"eventKey="1">
                                                <h5 className="text-left color-white">{<FaAngleDown/>} Kurs Davomiyligi? </h5>
                                            </AccordionToggle>
                                        </CardHeader>
                                        <AccordionCollapse eventKey="1">
                                            <CardBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quasi.</CardBody>
                                        </AccordionCollapse>
                                    </Card>
                                </Accordion>
                            </Tab>

                            <Tab eventKey="reyting" title="Reyting" tabClassName={mql.matches?"btn":"btn btn-block"}>
                                <Row md={12}>
                                    <Col md={4}>
                                        <div className="mt-5"></div>
                                        <div className="rounds">
                                            <p className="text-center mb-0 large">5</p>
                                            <div className="color-yellow pt-0 ml-5 pl-3">
                                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                            </div>
                                            <div>
                                                <p className="small text-center mt-2">1 Reyting</p>
                                            </div>
                                        </div>
                                    </Col>
                                    {/*PROGRESS*/}
                                    <Col md={6}>
                                        <div className="mt-5"></div>
                                        <h4 className="thin">Batafsil reyting</h4>
                                        <Table>
                                            <tbody>
                                            <tr className="pb-0">
                                                <td><p className="small">Yulduzlar 2</p></td>
                                                <td>
                                                    <ProgressBar now={this.state.eventKey} className="bar mt-2" />
                                                </td>
                                                <td><p>2</p></td>
                                            </tr>
                                            <tr className="pb-0">
                                                <td><p className="small">Yulduzlar 0</p></td>
                                                <td>
                                                    <ProgressBar now={10} className="bar mt-2" />
                                                </td>
                                                <td><p>14</p></td>
                                            </tr>
                                            <tr className="pb-0">
                                                <td><p className="small">Yulduzlar 3</p></td>
                                                <td>
                                                    <ProgressBar now={90} className="bar mt-2" />
                                                </td>
                                                <td><p>22</p></td>
                                            </tr>
                                            <tr className="pb-0">
                                                <td><p className="small">Yulduzlar 4</p></td>
                                                <td>
                                                    <ProgressBar now={50} className="bar mt-2" />
                                                </td>
                                                <td><p>10</p></td>
                                            </tr>
                                            <tr className="pb-0">
                                                <td><p className="small">Yulduzlar 0</p></td>
                                                <td>
                                                    <ProgressBar now={3} className="bar mt-2" />
                                                </td>
                                                <td><p>0</p></td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                    {/*PROGRESS*/}
                                    <Col md={2}></Col>
                                </Row>
                                <hr/>
                                <Row md={12}>
                                    <Col md={3}>
                                        <div className="d-inline-block">
                                            <h6 className="d-inline-block pr-0">Csss3  |</h6>
                                            <p className="small text-opacity mt-1 ml-2 float-right">1 month</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row md={12}>
                                    <Col md={1}>
                                        <h1><FaCss3Alt/></h1>
                                    </Col>
                                    <Col md="11">
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="color-yellow"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                                            </li>
                                            <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio eligendi laborum obcaecati odio possimus, quas quidem voluptatem.</p></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>

                            <Tab eventKey="contact" title="Contact" tabClassName={mql.matches?"btn":"btn btn-block"}>
                                <ol>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, maxime!</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</li>
                                    <li>, consectetur adipisicing elit!</li>
                                    <li>Lorem ipsum. , consectetur adipisicing elit!</li>
                                    <li>Lorem ipsum. , consectetur adipisicing elit!</li>
                                    <li>Lorem ipsum. , consectetur adipisicing elit!</li>
                                </ol>
                            </Tab>

                        </Tabs>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TabsSection;