import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, Button, ModalFooter, Input } from 'reactstrap';

const CollectionCreate = (props) => {
    const [name, setName] = useState('');

    const [modal, setModal] = useState(false);
    const [collectionModal, setCollectionModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false)


    const toggle = () => setModal(!modal);
    const toggleCollection = () => {
        setCollectionModal(!collectionModal);
        setCloseAll(false);
    }

    const toggleAll = () => {
        setCollectionModal(!collectionModal);
        setCloseAll(true);
    }

    return (
        <div>
            <Button color="success" onClick={toggleCollection}>Create a Collection</Button>
            <Modal isOpen={collectionModal} toggle={toggleCollection} onClosed={closeAll ? toggle : undefined}>
                <ModalHeader>Create Collection</ModalHeader>
                <ModalBody>
                    <Input onChange={(e) => setName(e.target.value)} type="text" value={name} name="collectionname" id="collectionname" placeholder="Collection Name" />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleCollection}>Done</Button>{' '}
                    <Button color="secondary" onClick={toggleAll}>All Done</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CollectionCreate;