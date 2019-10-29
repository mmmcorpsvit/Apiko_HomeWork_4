import React, {Fragment} from "react";

import {ListGroup, Navbar, Pagination, Card, Button} from 'react-bootstrap';

import Pagination2 from "react-js-pagination-bs4";
// require("bootstrap/less/bootstrap.less");
// import Pagination_custom from 'rc-pagination';
// import 'rc-pagination/assets/index.css';

// import {ITVShowListData} from "../config";
import {ListItem} from './ListItem';
// https://react-bootstrap.github.io/components/cards/

export const Info = ({title, description, poster,  ...props}) => {
    // if (data === undefined) {
    //     return null;
    // }
    {/*<ListGroup.Item key={item.id} onClick={onItemClick}>{item.name}</ListGroup.Item>*/
    }
    return (
        <Fragment>
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Img variant="top" src={poster} />

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    {/*<Button variant="primary">Go somewhere</Button>*/}
                </Card.Body>
            </Card>
        </Fragment>
    )
};
