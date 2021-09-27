import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Button, ModalFooter, Input, Form } from 'reactstrap';

const WishlistCreate = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [wishlistModal, setWishlistModal] = useState(false);
    const toggleWishlist = () => setWishlistModal(!wishlistModal);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/wishlist/create", {
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
            .then((wishlistData) => {
                setName('');
                setDescription('');
            })
    }

    return (
        <div>
            <Button color="success" onClick={toggleWishlist}>Create a Wishlist</Button>
            <Modal isOpen={wishlistModal} toggle={toggleWishlist}>
                <ModalHeader>Create Wishlist</ModalHeader>
                <Form onSubmit={handleSubmit}>
                <ModalBody>
                    <Input onChange={(e) => setName(e.target.value)} type="text" value={name} name="wishlistname" id="wishlistname" placeholder="Wishlist Name" />
                    <Input onChange={(e) => setDescription(e.target.value)} type="text" value={description} name="wishlistdescription" id="wishlistdescription" placeholder="Description" />
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color="primary" onClick={toggleWishlist}>Done</Button>{' '}
                    <Button color="secondary" onClick={toggleWishlist}>Cancel</Button>
                </ModalFooter>
                </Form>
            </Modal>
        </div>
    )
}

export default WishlistCreate;