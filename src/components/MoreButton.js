import React from 'react';
import {Button} from 'react-bootstrap';

export const MoreButton = (props) => {


    // const onClick = () => {
    //     console.log('Not yet implemented');
    // };

    return (
        <Button onClick={props.handleIncrement}>More...</Button>
    )
};
