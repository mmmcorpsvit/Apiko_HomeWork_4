import React, {Fragment} from "react";

import {Card} from 'react-bootstrap';

// import Pagination2 from "react-js-pagination-bs4";
// require("bootstrap/less/bootstrap.less");
// import Pagination_custom from 'rc-pagination';
// import 'rc-pagination/assets/index.css';

// import {ITVShowListData} from "../config";
// import {ListItem} from './ListItem';
// https://react-bootstrap.github.io/components/cards/

import "./Info.css";
import {InfoItem} from "./InfoItem";


// export const Info = ({title, description, poster,  ...props}) => {
export const Info = ({infoData, ...props}) => {
    const adjust = (item) => {
        const res = null;
        // (data.episodes && data.episodes.isArray() ? data.episodes.length : null);


        return res;
    };

    // заголовок, опис, постер, кількість сезонів, кількість епізодів і список сезонів даного TV show.
    return (
        <Fragment>
            <Card>
                {/*<Card.Header>*/}
                {/*    {data.name}*/}
                {/*</Card.Header>*/}

                <Card.Img alt={infoData.name}
                    // style={{width: '185', height: '278'}}
                          variant="top"
                          src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + infoData.poster_path}
                />

                <Card.Body>
                    <Card.Title>{infoData.name}</Card.Title>
                    <Card.Text>
                        {infoData.overview} <br/>
                        <InfoItem info_header="Seasons" info_value={infoData.number_of_seasons}/>
                        <InfoItem info_header="Season Number" info_value={infoData.season_number}/>

                        <InfoItem info_header="Episodes" info_value={infoData.number_of_episodes}/>
                        <InfoItem info_header="Episodes" info_value={Array.isArray(infoData.episodes) ? infoData.episodes.length : null}/>
                        <InfoItem info_header="Episodes Number" info_value={adjust(infoData.episodes)}/>

                        {/*Episodes: {data.number_of_episodes}*/}
                    </Card.Text>

                    {/*<Card.Text>Sessons count: {data.number_of_seasons}</Card.Text>*/}
                    {/*<Card.Text>Episodes count: {data.number_of_episodes}</Card.Text>*/}
                    {/*<Button variant="primary">Go somewhere</Button>*/}
                </Card.Body>
            </Card>
        </Fragment>
    )
};
