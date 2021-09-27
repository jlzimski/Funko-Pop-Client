import React, { useState, useEffect } from 'react';
import CollectionCreate from './CollectionCreate';
import WishlistCreate from './WishlistCreate';


const ListIndex = (props) => {
    const [collections, setCollections] = useState([]);

    const fetchCollections = () => {
        fetch('http://localhost:3000/collection', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                setCollections(logData)
            })
    }


    useEffect(() => {
        fetchCollections();
    }, [])

    return (
        <div className="collections">
            <CollectionCreate />
            <br />
            <WishlistCreate />
        </div>
    )
}
export default ListIndex;