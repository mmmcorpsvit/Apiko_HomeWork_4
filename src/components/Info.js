import React, {Fragment} from "react";

import {ListGroup, Navbar, Pagination, Card, Button} from 'react-bootstrap';

import Pagination2 from "react-js-pagination-bs4";
// require("bootstrap/less/bootstrap.less");
// import Pagination_custom from 'rc-pagination';
// import 'rc-pagination/assets/index.css';

// import {ITVShowListData} from "../config";
import {ListItem} from './ListItem';
// https://react-bootstrap.github.io/components/cards/

import "./Info.css";

// export const Info = ({title, description, poster,  ...props}) => {
export const Info = ({data, ...props}) => {
    // if (data === undefined) {
    //     return null;
    // }
    {/*<ListGroup.Item key={item.id} onClick={onItemClick}>{item.name}</ListGroup.Item>*/
    }
    // заголовок, опис, постер, кількість сезонів, кількість епізодів і список сезонів даного TV show.
    return (
        <Fragment>
            <Card>
                {/*<Card.Header>*/}
                {/*    {data.name}*/}
                {/*</Card.Header>*/}

                <Card.Img alt={data.name}
                    // style={{width: '185', height: '278'}}
                    variant="top"
                    src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + data.poster_path}
                />

                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data.overview} <br/>
                        Sessons: {data.number_of_seasons}<br/>
                        Episodes: {data.number_of_episodes}
                    </Card.Text>

                    {/*<Card.Text>Sessons count: {data.number_of_seasons}</Card.Text>*/}
                    {/*<Card.Text>Episodes count: {data.number_of_episodes}</Card.Text>*/}
                    {/*<Button variant="primary">Go somewhere</Button>*/}
                </Card.Body>
            </Card>
        </Fragment>
    )
};
