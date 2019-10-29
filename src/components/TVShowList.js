import React, {Fragment} from "react";

import {ListGroup, Navbar, Pagination} from 'react-bootstrap';

import Pagination2 from "react-js-pagination-bs4";
// require("bootstrap/less/bootstrap.less");
// import Pagination_custom from 'rc-pagination';
// import 'rc-pagination/assets/index.css';

// import {ITVShowListData} from "../config";

export const TVShowList = ({data, onItemClick, onPageChange, ...props}) => {
    // if (data === undefined) {
    //     return null;
    // }

    return (
        <Fragment>



            <ListGroup>
                {/*{console.log('list render', data)}*/}

                {data.results.map((item) => (
                    <ListGroup.Item key={item.id} onClick={onItemClick}>{item.name}</ListGroup.Item>
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
