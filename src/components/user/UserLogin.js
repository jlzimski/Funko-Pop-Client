import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';





const UserLogin = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <div>
                <Button color="info" onClick={toggle}>{buttonLabel}User Login</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>User Login</ModalHeader>
                    <ModalBody>
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="email" className="mr-sm-2">Email</Label>
                                <Input onChange={(e) => setEmail(e.target.value)} type="email" value={email} name="email" id="exampleEmail" placeholder="funkoFanatic@fake.cool" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="username" className="mr-sm-2">Password</Label>
                                <Input onChange={(e) => setUserName(e.target.value)} type="username" value={username} name="username" id="username" placeholder="#1FunkoFan" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="password" className="mr-sm-2">Password</Label>
                                <Input onChange={(e) => setPassword(e.target.value)} type="password" value={password} name="password" id="password" placeholder="don't tell!" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit  " onClick={toggle}>Login</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <br />

        </div>
    );
}

export default UserLogin;