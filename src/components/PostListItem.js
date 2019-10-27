import React, {Fragment} from 'react';
import {ListGroup} from 'react-bootstrap';

export const PostListItem = (props) => {


    // const onClick = () => {
    //     console.log('Not yet implemented');
    // };

    return (
        <Fragment>

            <ListGroup.Item>
                <div className="bg-info">
                    {props.item.title}
                </div>
                <small>
                    {props.item.body}
                </small>
            </ListGroup.Item>


        </Fragment>
    )
};
