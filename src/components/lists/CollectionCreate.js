import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Button, ModalFooter, Input, Form } from 'reactstrap';

const CollectionCreate = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [collectionModal, setCollectionModal] = useState(false);
    const toggleCollection = () => setCollectionModal(!collectionModal);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/collection/create", {
            method: 'POST',
            body: JSON.stringify({
                Collection: {
                    name: name,
                    description: description
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((collectionData) => {
                setName('');
                setDescription('');
            })
    }

    return (
        <div>
            <Button color="success" onClick={toggleCollection}>Create a Collection</Button>
            <Modal isOpen={collectionModal} toggle={toggleCollection}>
                <ModalHeader>Create Collection</ModalHeader>
                <Form onSubmit={handleSubmit}>
                <ModalBody>
                    <Input onChange={(e) => setName(e.target.value)} type="text" value={name} name="collectionname" id="collectionname" placeholder="Collection Name" />
                    <Input onChange={(e) => setDescription(e.target.value)} type="text" value={description} name="collectiondescription" id="collectiondescription" placeholder="Description" />
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color="primary" onClick={toggleCollection}>Done</Button>{' '}
                    <Button color="secondary" onClick={toggleCollection}>Cancel</Button>
                </ModalFooter>
                </Form>
            </Modal>
        </div>
    )
}

export default CollectionCreate;