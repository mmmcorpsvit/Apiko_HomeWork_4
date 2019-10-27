import React from 'react';

import {Form, Navbar, Nav} from 'react-bootstrap';

import {Filter} from "./Filter";
import {MoreButton} from "./MoreButton";

export const Header = (props) => {
    let moreButton = props.showMoreButton ? (
//            <Nav className="mr-auto">
            <MoreButton handleIncrement={props.handleIncrement}/>
//            </Nav>
        ) :
        null;


    return (
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                    {/*    <MoreButton handleIncrement={props.handleIncrement}/>*/}
                    {moreButton}
                </Nav>


                <Form inline>
                    <Filter handleFilter={props.handleFilter}/>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
};
