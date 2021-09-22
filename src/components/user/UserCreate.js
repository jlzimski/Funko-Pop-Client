import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const UserCreate = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');


    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password)
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({
                user: { email: email, password: password, username: username },
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    };

    return (
        <div>
            <br />
            <Button color="info" onClick={toggle}>Create User Account</Button>
            <Modal isOpen={modal} toggle={toggle} className="create-user">
                <ModalHeader toggle={toggle}>Create User Account</ModalHeader>
                <Form onSubmit={handleSubmit}>
                <ModalBody>
                    <FormGroup>
                    <Label for="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type ="email" value={email} name="email" id="exampleEmail" placeholder="funkoFan@imaginaryemail.com" />
                    </FormGroup>
                    <Row form>
                    <Col>
                    <FormGroup>
                    <Label for="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} type ="password"value={password} name="password" id="password" placeholder="password" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} type ="text" value={username} name="username" id="username" placeholder="#1FunkoFan" />
                    </FormGroup>
                    </Col>
                    {/* <Col>
                    <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input onChange={(e) => setConfirmPassword(e.target.value)} type ="password" value={confirmPassword} name="confirmPassword" id="confirmPassword" placeholder="confirm password" />
                    </FormGroup>
                    </Col> */}
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="info" type="submit">Create New User</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </Modal>
        </div >
    );
}

export default UserCreate;