import React from "react";

import {Breadcrumb} from 'react-bootstrap';
// import Breadcrumb from 'react-bootstrap/Breadcrumb'

// show_id, season_id, episode_id
export const BreadcrumbBar = ({page, ...props}) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            {/*<Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">*/}
            <Breadcrumb.Item active>
                {page}
            </Breadcrumb.Item>
            {/*<Breadcrumb.Item active>Data</Breadcrumb.Item>*/}

        </Breadcrumb>
    );
};
