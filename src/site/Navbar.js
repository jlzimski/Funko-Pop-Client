import React, { useState } from 'react';
import { Nav, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';


const Sitebar = (props) => {
    const [userDropdown, setUserDropdown] = useState(false);
    // const [collectionDropdown, setCollectionDropdown] = useState(false);
    // const [wishlistDropdown, setWishlistDropdown] = useState(false);

    const toggleUser = () => setUserDropdown(!userDropdown);
    // const toggleCollection = () => setCollectionDropdown(!collectionDropdown);
    // const toggleWishlist = () => setWishlistDropdown(!wishlistDropdown);


    return (
        <div className="navbar">

            <Nav className="drop-down-row">
                <div id="user">
                    <ButtonDropdown isOpen={userDropdown} toggle={toggleUser}>
                        <DropdownToggle nav caret color="info">
                            MENU 
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>User</DropdownItem>
                            <DropdownItem>Sign In</DropdownItem>
                            <DropdownItem>Edit Account</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={props.CollectionCreate}>Create Collection</DropdownItem>
                            <DropdownItem onClick={props.WishlistCreate} >Create Wishlist</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={props.clickLogout}>Logout</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
                <br />
                {/* <div id="collections">
                    <ButtonDropdown isOpen={collectionDropdown} toggle={toggleCollection}>
                        <DropdownToggle nav caret color="info">
                            COLLECTIONS
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Collections</DropdownItem>
                            <DropdownItem >Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>

                        </DropdownMenu>
                    </ButtonDropdown>
                </div> */}
                {/* <br />
                <div id="wishlists">
                    <ButtonDropdown isOpen={wishlistDropdown} toggle={toggleWishlist}>
                        <DropdownToggle nav caret color="info">
                            WISHLISTS
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Wishlists</DropdownItem>
                            <DropdownItem >Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                        </DropdownMenu>
                    </ButtonDropdown>
                </div> */}
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