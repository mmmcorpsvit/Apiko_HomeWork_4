import React from "react";

import {Button, ListGroup} from 'react-bootstrap';

// https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method

export const ListItem2 = ({item, handleItemClick, ...props}) => {
    return (
        <Button className="list-group-item list-group-item-action" onClick={()=>handleItemClick(item)} >{item.name}</Button>
    )
};



export const ListItem = ({item, handleItemClick, ...props}) => {
    return (
        <ListGroup.Item action
                        href={`#${item.id}`}
                        key={item.id}

                        onClick={()=>handleItemClick(item)}>
            {item.name}
        </ListGroup.Item>
    )
};


// export const ListItem = ({item, handleItemClick, ...props}) => {
//     return (
//         <ListGroup.Item action
//                         href={`#${item.id}`}
//                         key={item.id}
//
//                         onClick={handleItemClick.bind(
//                             null,
//                             item,
//                         )}>
//             {item.name}
//         </ListGroup.Item>
//     )
// };
