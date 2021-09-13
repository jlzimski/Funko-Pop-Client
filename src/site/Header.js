import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Funko Pop Collection Database</h1>
                    <p className="lead">other text</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Header;