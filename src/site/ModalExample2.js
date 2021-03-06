import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const ModalExample2 = (props) => {
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
                                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Login</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <br />

        </div>
    );
}

export default ModalExample2;