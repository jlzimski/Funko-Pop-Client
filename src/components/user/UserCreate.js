import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';


const UserCreate = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <br />
            <Button color="info" onClick={toggle}>{buttonLabel}Create User Account</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Create User Account</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" value={username} name="username" id="username" placeholder="#1FunkoFan" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" value={email} name="email" id="exampleEmail" placeholder="funkoFan@imaginaryemail.com" />
                        </FormGroup>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password"value={password} name="password" id="password" placeholder="password" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Confirm Password</Label>
                                    <Input type="password" value={confirmPassword} name="confirmPassword" id="confirmPassword" placeholder="confirm password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input type="checkbox" name="check" id="exampleCheck" />
                            <Label for="exampleCheck" check>Create New Collection</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" name="check" id="exampleCheck" />
                            <Label for="exampleCheck" check>Create New Wishlist</Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={toggle}>Create New User</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UserCreate;