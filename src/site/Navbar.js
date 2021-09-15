import React, { useState } from 'react';
import { Nav, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';


const Sitebar = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <div className="navbar">

            <Nav className="drop-down-row">
                <div id="user">
                    <ButtonDropdown isOpen={false} toggle={toggle}>
                        <DropdownToggle nav caret color="info">
                            USER  
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
                <br />
                <div id="collections">
                    <ButtonDropdown nav isOpen={false} toggle={toggle}>
                        <DropdownToggle nav caret color="info">
                            COLLECTIONS
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
                <br />
                <div id="wishlists">
                    <ButtonDropdown nav isOpen={false} toggle={toggle}>
                        <DropdownToggle nav caret color="info">
                            WISHLISTS
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
                <br />
                <div id="search">
                    <InputGroup>
                        <Input placeholder="" />
                        <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
                    </InputGroup>
                </div>
            </Nav >
        </div >
    )
}

export default Sitebar;