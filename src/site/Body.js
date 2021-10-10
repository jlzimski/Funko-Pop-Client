import React from 'react';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Body = (props) => {
    return (
        <><div class="btn-toolbar justify-content-centercd" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-info">A</button>
                <button type="button" class="btn btn-info">B</button>
                <button type="button" class="btn btn-info">C</button>
                <button type="button" class="btn btn-info">D</button>
                <button type="button" class="btn btn-info">E</button>
                <button type="button" class="btn btn-info">F</button>
                <button type="button" class="btn btn-info">G</button>
                <button type="button" class="btn btn-info">H</button>
                <button type="button" class="btn btn-info">I</button>
                <button type="button" class="btn btn-info">J</button>
                <button type="button" class="btn btn-info">K</button>
                <button type="button" class="btn btn-info">L</button>
                <button type="button" class="btn btn-info">M</button>
                <button type="button" class="btn btn-info">N</button>
                <button type="button" class="btn btn-info">O</button>
                <button type="button" class="btn btn-info">P</button>
                <button type="button" class="btn btn-info">Q</button>
                <button type="button" class="btn btn-info">R</button>
                <button type="button" class="btn btn-info">S</button>
                <button type="button" class="btn btn-info">T</button>
                <button type="button" class="btn btn-info">U</button>
                <button type="button" class="btn btn-info">V</button>
                <button type="button" class="btn btn-info">W</button>
                <button type="button" class="btn btn-info">X</button>
                <button type="button" class="btn btn-info">Y</button>
                <button type="button" class="btn btn-info">Z</button>
                <button type="button" class="btn btn-info">#</button>
                <button type="button" class="btn btn-info">4</button>
            </div>
        </div>
        <div className="body">
                <br />
                <Card body className="text-center" inverse color="info" id="card">
                    <CardImg top width="100%" src="/assets/FunkoPopAvatar.jpg" alt="Card image cap" />
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Card>
                <br />
                <Card body className="text-center" inverse color="info" id="card">
                    <CardImg top width="20%" src="/assets/FunkoPopAvatar.jpg" alt="Card image cap" />
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Card>
                <br />
                <Card body className="text-center" inverse color="info" id="card">
                    <CardImg top width="20%" src="/assets/FunkoPopAvatar.jpg" alt="Card image cap" />
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Card>
                <br />
                <Card body className="text-center" inverse color="info" id="card">
                    <CardImg top width="20%" src="/assets/FunkoPopAvatar.jpg" alt="Card image cap" />
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                </Card>
            </div></>
    );
};

export default Body;