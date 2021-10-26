import React, { useState } from 'react';
import { Button, InputGroup, InputGroupAddon, Input, Navbar, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';

const Sitebar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div className="navbar">
            <Navbar id="menu" color="faded" light>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem >New? Click here to drink the Koolaid! --> Create Account</NavItem>
                        <NavItem >Hello Friend! --> Login</NavItem>
                        <NavItem onClick={props.clickLogout}>So Long Old Pal! --> Sign Out</NavItem>
                        <hr />
                        <NavItem divider />
                        <NavItem onClick={props.CollectionCreate}>Create a Collections</NavItem>
                        <NavItem onClick={props.WishlistCreate}>Start a Wishlist</NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <br />
            <div id="search">
                <InputGroup size="lg">
                    <Input placeholder="Find a Funko" />
                    <InputGroupAddon addonType="append"><Button size="lg">Search</Button></InputGroupAddon>
                </InputGroup>
            </div>
        </div >
    )
}

export default Sitebar;