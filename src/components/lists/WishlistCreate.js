import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, Button, ModalFooter, Input } from 'reactstrap';

const WishlistCreate = (props) => {
    const [name, setName] = useState('');

    const [modal, setModal] = useState(false);
    const [wishlistModal, setWishlistModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false)


    const toggle = () => setModal(!modal);
    const toggleWishlist = () => {
        setWishlistModal(!wishlistModal);
        setCloseAll(false);
    }

    const toggleAll = () => {
        setWishlistModal(!wishlistModal);
        setCloseAll(true);
    }

    return (
        <div>
            <Button color="success" onClick={toggleWishlist}>Create a Collection</Button>
            <Modal isOpen={wishlistModal} toggle={toggleWishlist} onClosed={closeAll ? toggle : undefined}>
                <ModalHeader>Create Wishlist</ModalHeader>
                <ModalBody>
                    <Input onChange={(e) => setName(e.target.value)} type="text" value={name} name="wishlistname" id="wishlistname" placeholder="Wishlist Name" />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleWishlist}>Done</Button>{' '}
                    <Button color="secondary" onClick={toggleAll}>All Done</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default WishlistCreate;