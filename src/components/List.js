import React, {Fragment} from "react";

import {ListGroup} from 'react-bootstrap';

import Pagination2 from "react-js-pagination";
import {ListItem} from './ListItem';
import {CURRENT_VIEW} from "../config";

export const List = ({listData, current_view, handleItemClick, onPageChange, ...props}) => {
    return (
        <Fragment>
            <ListGroup>
                {listData.data.map((item) => (
                    <ListItem
                        key={item.id}
                        // current_show_id = {current_show_id}
                        // id={item.id}
                        // aditional_id={item[aditional_id_field]}
                        // current_episode_id={current_episode_id}

                        item={item}
                        handleItemClick={handleItemClick}
                        // text={item.name}
                    />
                ))}

            </ListGroup>

            {current_view !== CURRENT_VIEW.MAIN ? null :
            <Pagination2 itemClass="page-item"
                         linkClass="page-link"
                         innerClass="justify-content-center pagination"
                         itemsCountPerPage={1}

                         activePage={listData.infoData.page}
                         totalItemsCount={listData.infoData.total_pages}
                         onChange={onPageChange}
            />}
        </Fragment>
    )
};
