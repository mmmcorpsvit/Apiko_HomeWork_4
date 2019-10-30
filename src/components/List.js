import React, {Fragment} from "react";

import {ListGroup} from 'react-bootstrap';

import Pagination2 from "react-js-pagination-bs4";
// require("bootstrap/less/bootstrap.less");
// import Pagination_custom from 'rc-pagination';
// import 'rc-pagination/assets/index.css';

// import {ITVShowListData} from "../config";
import {ListItem} from './ListItem';

export const List = ({data, handleItemClick, onPageChange, ...props}) => {
    // if (data === undefined) {
    //     return null;
    // }
    return (
        <Fragment>


            <ListGroup>
                {/*{console.log('list render', data)}*/}


                {data.map((item) => (
                    <ListItem key={item.id} id={item.id} handleItemClick={handleItemClick} text={item.name}/>
                ))}

            </ListGroup>

            {/*<Pagination2 itemClass="page-item"*/}
            {/*             linkClass="page-link"*/}
            {/*             innerClass="justify-content-center pagination"*/}
            {/*             itemsCountPerPage={1}*/}

            {/*             activePage={data.page}*/}
            {/*             totalItemsCount={data.total_pages}*/}
            {/*             onChange={onPageChange}*/}
            {/*/>*/}
        </Fragment>
    )
};
