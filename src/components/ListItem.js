import React from "react";

import {ListGroup} from 'react-bootstrap';

export const ListItem = ({item, handleItemClick, ...props}) => {
    return (
        <ListGroup.Item action
                        href={`#${item.id}`}
                        key={item.id}

                        onClick={handleItemClick.bind(
                            null,
                            item,
                        )}>
            {item.name}
        </ListGroup.Item>
    )
};
