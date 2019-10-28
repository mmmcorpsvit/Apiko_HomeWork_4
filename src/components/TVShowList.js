import React from "react";

import {ListGroup, ToggleButtonGroup, ToggleButton, Pagination, PageItem } from 'react-bootstrap';

import {ITVShowListData} from "../config";

export const TVShowList = ({data, onItemClick, ...props})  => {
    if (data === undefined) {
        return null;
    }

    return (
        <ListGroup>
            {console.log('list render', data)}

            {data.results.map((item)=>(
                <ListGroup.Item key={item.id} onClick={onItemClick}>{item.name}</ListGroup.Item>
            ))}

        </ListGroup>
    )
};
