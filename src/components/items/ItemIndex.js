import React, { useState } from 'react';

const ItemIndex = () => {
    const [result, setResult] = useState();

    const fetchItems = () => {
        fetch('http://localhost:3000/items')
        .then(res => {
            if (res.status !== 200) {
                throw new Error('fetch error');
            } else return res.json();
        })
        .then(json => {
            if (json.result.length === 0) {
                throw new Error('no results');
            } else {
                const itemNum = Math.floor(Math.random()*json.result.length);
                setResult(json.result[itemNum]);
                console.log(json.result[itemNum])
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="main">
            <div className="mainDiv">

            </div>
        </div>
    )
}