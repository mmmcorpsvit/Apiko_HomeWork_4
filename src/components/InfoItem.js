import React, {Fragment} from "react";

// import {Card} from 'react-bootstrap';

// import Pagination2 from "react-js-pagination-bs4";
// require("bootstrap/less/bootstrap.less");
// import Pagination_custom from 'rc-pagination';
// import 'rc-pagination/assets/index.css';

// import {ITVShowListData} from "../config";
// import {ListItem} from './ListItem';
// https://react-bootstrap.github.io/components/cards/

// export const Info = ({title, description, poster,  ...props}) => {
export const InfoItem = ({info_header, info_value, ...props}) => {
    // if (data === undefined) {
    //     return null;
    // }

    // заголовок, опис, постер, кількість сезонів, кількість епізодів і список сезонів даного TV show.
    return !info_value
        ? null
        : (<Fragment>
            {info_header}: {info_value}
            <br/>
        </Fragment>)
};
