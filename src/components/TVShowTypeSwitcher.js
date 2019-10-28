import React, {Fragment, useState} from "react";
import T from 'prop-types';

import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import {TV_SHOW_TYPE} from "../config";


export const TVShowTypeSwitcher = ({movie, onChangeHandle, ...props}) => {
// export const TVShowTypeSwitcher: React.FC = (props) => {
//     const [value, setMovieType] = useState();
//     const handleChange = (val) => {
//         console.log(val);
//         setMovieType(val);
//         onChangeHandle(val);
//     };
//

    let ToggleButtons = [];
    for (let key in TV_SHOW_TYPE) {
        ToggleButtons.push(
            (<ToggleButton
                key={key}
                value={key}>{TV_SHOW_TYPE[key].name}
            </ToggleButton>))
    }

    return (
        <Fragment>
            <ToggleButtonGroup type="radio" defaultValue={movie.type} onChange={onChangeHandle} name="TVShowTypeSwitcher">
                {ToggleButtons}
            </ToggleButtonGroup>
        </Fragment>
    );
};


// TVShowTypeSwitcher.propTypes = {
//     movie_type: T.string.isRequired,
//     onChangeHandle: T.func.isRequired
// };
