import React, {Fragment} from "react";

import {ListGroup, Navbar, Pagination} from 'react-bootstrap';

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
    {/*<ListGroup.Item key={item.id} onClick={onItemClick}>{item.name}</ListGroup.Item>*/
    }
    return (
        <Fragment>


            <ListGroup>
                {/*{console.log('list render', data)}*/}


                {data.results.map((item) => (
                    <ListItem key={item.id} id={item.id} data-id={item.id} handleItemClick={handleItemClick} text={item.name}/>
                ))}

            </ListGroup>

            {/*<Navbar bg="dark" variant="dark" expand="sm" sticky="bottom">*/}
            <Pagination2 itemClass="page-item"
                         linkClass="page-link"
                         innerClass="justify-content-center pagination"
                         itemsCountPerPage={1}

                         activePage={data.page}
                         totalItemsCount={data.total_pages}
                         onChange={onPageChange}
            />
            {/*</Navbar>*/}
        </Fragment>
    )
};
