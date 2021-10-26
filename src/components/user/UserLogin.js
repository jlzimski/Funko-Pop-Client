import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const UserLogin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user:{ email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json/'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return (
        <div>
            <div>
                <Button color="info" onClick={toggle}>User Login</Button>
                <Modal isOpen={modal} toggle={toggle} className="user-login">
                    <ModalHeader toggle={toggle}>User Login</ModalHeader>
                    <Form onSubmit={handleSubmit}>
                    <ModalBody>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="email" className="mr-sm-2">Email</Label>
                                <Input onChange={(e) => setEmail(e.target.value)} type="email" value={email} name="email" id="email" placeholder="#1FunkoFan@email.com" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="password" className="mr-sm-2">Password</Label>
                                <Input onChange={(e) => setPassword(e.target.value)} type="password" value={password} name="password" id="password" placeholder="don't tell!" />
                            </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit" onClick={toggle}>Login</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                    </Form>
                </Modal>
            </div>
            <br />
        </div>
    );
}

export default UserLogin;