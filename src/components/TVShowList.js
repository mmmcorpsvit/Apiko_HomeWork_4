import React from "react";

import {ListGroup, ToggleButtonGroup, ToggleButton, Pagination, PageItem } from 'react-bootstrap';

import {ITVShowListData} from "../config";

export const TVShowList = ({list_data, onItemClick, ...props})  => {
    return (
        <ListGroup>
            {list_data.map((items)=>(
                <ListGroup.Item key={items.id} onClick={onItemClick}>{items.name}</ListGroup.Item>
            ))}

            {/*<ListGroup.Item onClick={onItemClick}>Cras justo odio</ListGroup.Item>*/}


            {/*<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>*/}
            {/*<ListGroup.Item>Morbi leo risus</ListGroup.Item>*/}
            {/*<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>*/}


        </ListGroup>
    )
};
