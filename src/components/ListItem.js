import React from "react";

import {ListGroup} from 'react-bootstrap';

// import Pagination2 from "react-js-pagination-bs4";
// require("bootstrap/less/bootstrap.less");
// import Pagination_custom from 'rc-pagination';
// import 'rc-pagination/assets/index.css';

// import {ITVShowListData} from "../config";

export const ListItem = ({id, text, handleItemClick,...props}) => {
    // if (data === undefined) {
    //     return null;
    // }


    return (
        <ListGroup.Item action href={`#${id}`} key={id} onClick={handleItemClick.bind(null, id)}>
            {text}
        </ListGroup.Item>
    )
};
