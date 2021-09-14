import React from 'react';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Body = (props) => {
    return (
        <div className="body">
            <br/>
            <Card body className="text-center" inverse color="info" id="card">
                <CardImg top width="100%" src="/assets/FunkoPopAvatar.jpg" alt="Card image cap" />
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
            </Card>
            <br/>
            <Card body className="text-center" inverse color="info" id="card">
                <CardImg top width="20%" src="/assets/FunkoPopAvatar.jpg" alt="Card image cap" />
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
            </Card>
            <br/>
            <Card body className="text-center" inverse color="info" id="card">
                <CardImg top width="20%" src="/assets/FunkoPopAvatar.jpg" alt="Card image cap" />
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
            </Card>
            <br/>
            <Card body className="text-center" inverse color="info" id="card">
                <CardImg top width="20%" src="/assets/FunkoPopAvatar.jpg" alt="Card image cap" />
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
            </Card>
        </div >
    );
};

export default Body;