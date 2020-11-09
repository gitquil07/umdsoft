import React, {Component} from 'react';
import {Button, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Link} from "react-router-dom";
import './zayavka-model.css'

class ProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <div>
                    <Button className="btn btn-block btn-info" onClick={this.toggle}>zayavka</Button>
                    <Modal isOpen={!this.state.modal} toggle={this.toggle} className={"scale-in-right"}>
                        <ModalHeader toggle={this.toggle}>So'rov shakllantirish</ModalHeader>
                        <Form className="form">
                        <ModalBody>
                            <div className="regForm">

                                    <Label htmlFor="">F.I.O</Label>
                                    <div className="inputs">
                                        <span className="inputIcon"></span>
                                        <Input
                                            id="fio"
                                            type="text"
                                            name="fio"
                                            placeholder="F.I.O" />
                                    </div>
                                    <Label htmlFor="">NUMBER</Label>
                                    <div className="inputs">
                                        <span className="inputIcon"></span>
                                        <Input
                                            id="number"
                                            type="text"
                                            name="number"
                                            placeholder="NUMBER" />
                                    </div>
                                <Label htmlFor="" className="mb-3">SKILLS</Label>
                                <div className="inputs">
                                    <span className=""></span>
                                    <Input
                                        id="skills"
                                        type="textarea"
                                        name="skills"
                                        placeholder="SKILLS" />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color='danger' onClick={()=>this.toggle()}>Cancel</Button>{' '}
                            <Button color='primary' onClick={()=>this.toggle()}>Submit</Button>
                        </ModalFooter>
                        </Form>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default ProfileModal;