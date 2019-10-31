import React, {Fragment} from "react";


export const InfoItem = ({info_header, info_value, ...props}) => {

    // заголовок, опис, постер, кількість сезонів, кількість епізодів і список сезонів даного TV show.
    return !info_value
        ? null
        : (<Fragment>
            {info_header}: {info_value}
            <br/>
        </Fragment>)
};
