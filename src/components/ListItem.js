import React from "react";

import {ListGroup} from 'react-bootstrap';

// import Pagination2 from "react-js-pagination-bs4";
// require("bootstrap/less/bootstrap.less");
// import Pagination_custom from 'rc-pagination';
// import 'rc-pagination/assets/index.css';

// import {ITVShowListData} from "../config";

export const ListItem = ({item, handleItemClick, ...props}) => {
    return (
        <ListGroup.Item action
                        href={`#${item.id}`}
                        key={item.id}

                        onClick={handleItemClick.bind(
                            null,
                            item,
                            // aditional_id,
                            // current_episode_id
                        )}>
            {item.name}
        </ListGroup.Item>
    )
};
