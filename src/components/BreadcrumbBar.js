import React from "react";

import {Form, Navbar, Nav, Breadcrumb} from 'react-bootstrap';
// import Breadcrumb from 'react-bootstrap/Breadcrumb'

export const BreadcrumbBar: React.FC=(props)=>{
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
    );
};