import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class Card extends Component {
    const toggle = () => setModal(!modal);

    render() {
        console.log(user.id);
        let item = this.props.item.map((item) => {
            return (
                <div>
                    <div>
                        <Button color="info" onClick={toggle}>Admin Portal</Button>
                        <Modal isOpen={modal} toggle={toggle} className="user-login">
                            <ModalHeader toggle={toggle}>Admin Portal</ModalHeader>
                            <div>/*Add or Update Item */</div>
                            <Form onSubmit={handleSubmit}> 
                                <ModalBody>
                                <h2>Add or Update Item</h2>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="itemId" className="mr-sm-2">Item Id</Label>
                                        <Input onChange={(e) => setItemId(e.target.value)} type="itemId" value={itemId} name="itemId" id="itemId" placeholder="item id" />
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="handle" className="mr-sm-2">Handle</Label>
                                        <Input onChange={(e) => setHandle(e.target.value)} type="handle" value={handle} name="handle" id="handle" placeholder="handle" />
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="title" className="mr-sm-2">Title</Label>
                                        <Input onChange={(e) => setTitle(e.target.value)} type="title" value={title} name="title" id="title" placeholder="title" />
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="image" className="mr-sm-2">Image</Label>
                                        <Input onChange={(e) => setImage(e.target.value)} type="image" value={image} name="image" id="image" placeholder="image url" />
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="series" className="mr-sm-2">Series</Label>
                                        <Input onChange={(e) => setSeries(e.target.value)} type="series" value={series} name="series" id="series" placeholder="series" />
                                    </FormGroup>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" type="submit" onClick={toggle}>Add Item</Button>{' '}
                                    <Button color="secondary" onClick={toggle}>Update Item</Button>
                                </ModalFooter>
                            </Form>
                            <div>/* Delete Item */</div>
                            <Form onSubmit={handleSubmit}> 
                                <ModalBody>
                                    <h2>Delete Item</h2>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label for="itemId" className="mr-sm-2">Item Id</Label>
                                        <Input onChange={(e) => setItemId(e.target.value)} type="itemId" value={itemId} name="itemId" id="itemId" placeholder="item id" />
                                    </FormGroup>
                                    </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" type="submit" onClick={toggle}>Delete Item</Button>{' '}
                                </ModalFooter>
                            </Form>
                        </Modal>
                    </div>
                </div>
            )
        })
        return (
            <div className="row p-1">
                {item}
            </div>
        )

    }
}