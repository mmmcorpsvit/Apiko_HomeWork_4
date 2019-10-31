import React, {Fragment} from "react";
// import T from 'prop-types';

import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import {TV_SHOW_TYPE} from "../config";


export const TVShowTypeSwitcher = ({tvshow, onChangeHandle, ...props}) => {
    const ToggleButtons = [];
    for (const key in TV_SHOW_TYPE) {
        ToggleButtons.push(
            (<ToggleButton
                key={key}
                value={key}>{TV_SHOW_TYPE[key].name}
            </ToggleButton>))
    }

    return (
        <Fragment>
            <ToggleButtonGroup
                style={{size: 'sm'}}
                type="radio"
                defaultValue={tvshow.type}
                onChange={onChangeHandle}
                name="TVShowTypeSwitcher">

                {ToggleButtons}
            </ToggleButtonGroup>
        </Fragment>
    );
};


// TVShowTypeSwitcher.propTypes = {
//     movie_type: T.string.isRequired,
//     onChangeHandle: T.func.isRequired
// };
