import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
    return (
        <div className="header">
            <Jumbotron fluid>
                <Container fluid>
                    <h1 id="header">Funko Pop Collection Database</h1>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Header;