import React from 'react';
// import T from 'prop-types';

import {ListGroup} from 'react-bootstrap';
import {PostListItem} from "./PostListItem";

export const PostList = (props) => {
    console.log('Post list rerender');

    let _counter = 0;

    //         <PostListItem key={index} item={item} show={index > 80}/>
    const listItems = props.data.map((item, index) => {
            let result = undefined;
            _counter++;

            if ((props.FilterText.isEmpty || item.forSearchText.includes(props.FilterText)) && _counter <= props.PostCount) {
                result = (<PostListItem key={index} item={item}/>);
            }


            return result;
        }
    );

    return (
        <ListGroup>
            {listItems}
        </ListGroup>
    )
};

// PostList.propTypes = {
//     data: T.array
// };
