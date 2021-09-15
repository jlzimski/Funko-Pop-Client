import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';


const ModalExample = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [collectionName, setCollectionName] = useState('');
    const [wishlistName, setWishlistName] = useState('');

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [collectionModal, setCollectionModal] = useState(false);
    const [wishlistModal, setWishlistModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false)


    const toggle = () => setModal(!modal);
    const toggleCollection = () => {
        setCollectionModal(!collectionModal);
        setCloseAll(false);
    }

    const toggleWishlist = () => {
        setWishlistModal(!wishlistModal);
        setCloseAll(false);
    }

    const toggleAll = () => {
        setCollectionModal(!collectionModal);
        setWishlistModal(!wishlistModal);
        setCloseAll(true);
    }

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
                            <Input onChange={(e) => setUsername(e.target.value)} type="text" value={username} name="username" id="username" placeholder="#1FunkoFan" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input onChange={(e) => setEmail(e.target.value)} type="email" value={email} name="email" id="exampleEmail" placeholder="funkoFan@imaginaryemail.com" />
                        </FormGroup>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" value={password} name="password" id="password" placeholder="password" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Confirm Password</Label>
                                    <Input type="password" value={confirmPassword} name="confirmPassword" id="confirmPassword" placeholder="confirm password" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <hr />
                    <Button color="success" onClick={toggleCollection}>Create a Collection</Button>
                    <Modal isOpen={collectionModal} toggle={toggleCollection} onClosed={closeAll ? toggle : undefined}>
                        <ModalHeader>Create Collection</ModalHeader>
                        <ModalBody>
                        <Input onChange={(e) => setCollectionName(e.target.value)} type="text" value={collectionName} name="collectionname" id="collectionname" placeholder="Collection name" />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleCollection}>Done</Button>{' '}
                            <Button color="secondary" onClick={toggleAll}>All Done</Button>
                        </ModalFooter>
                    </Modal>
                    <hr />
                    <Button color="success" onClick={toggleWishlist}>Create a Wishlist</Button>
                    <Modal isOpen={wishlistModal} toggle={toggleWishlist} onClosed={closeAll ? toggle : undefined}>
                        <ModalHeader>Create a Wishlist</ModalHeader>
                        <ModalBody>
                        <Input onChange={(e) => setWishlistName(e.target.value)} type="text" value={wishlistName} name="wishlist-name" id="wishlist-name" placeholder="Wishlist name" />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleWishlist}>Done</Button>{' '}
                            <Button color="secondary" onClick={toggleAll}>All Done</Button>
                        </ModalFooter>
                    </Modal>
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={toggle}>Create New User</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;