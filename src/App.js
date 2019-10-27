// https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
// npm install bootstrap @types/bootstrap react-bootstrap @types/react-bootstrap -D
// @ts-ignore
// import Toggle from 'react-bootstrap-toggle';


import React, {Fragment, useEffect, useState, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {Header} from "./components/Header";
import {TVShowList} from "./components/TVShowList";

import {ITVShowListData} from "./config";
// import {reducer, initialState} from "./components/Reducer";
import {Form, Nav, Navbar} from "react-bootstrap";
import {TVShowTypeSwitcher} from "./components/TVShowTypeSwitcher";
import {BreadcrumbBar} from "./components/BreadcrumbBar";
import {Loader} from "./components/Loader";
// import {ACTIONS} from "./components/Reducer";
import {TV_SHOW_TYPE, TV_SHOW_TYPE_INDEX} from "./config";
import {FetchData} from "./components/FetchData";


const App = () => {
    const [movie_type, setMovieType] = useState(TV_SHOW_TYPE_INDEX['POPULAR']); // TODO: UGLY, need TypeScipt ?
    const [breadcrumbBarPath, setbreadcrumbBarPath] = useState(0);

    const [list_data, setListData] = useState([]);

    // loading
    const [isLoading, setIsLoading] = useState(true);

    // const onTVShowListItemClick = () => {
    //     console.log('clicked !');
    // };


    const FetchDataFromServer = () => {
        FetchData(TV_SHOW_TYPE[movie_type].url, setListData, setIsLoading);
    };

    // init
    useEffect(() => {
        FetchDataFromServer();
    }, []);


    return isLoading ? (
            <Loader/>
        ) :
        (
            <Fragment>
                <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
                    {/*<a className="navbar-brand" href="/">HomeWork 4</a>*/}

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            <TVShowTypeSwitcher movie_type={movie_type} onChangeHandle={setMovieType}/>
                        </Nav>


                        {/*<Form inline>*/}
                        {/*<Filter handleFilter={props.handleFilter}/>*/}
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Navbar>

                <BreadcrumbBar/>
                {/*<Header MOVIE_PAGE={MOVIE_DATA.MOVIE_PAGE} MOVIE_TYPE={MOVIE_DATA.MOVIE_TYPE}/>*/}
                <TVShowList list_data={list_data}/>
            </Fragment>
        );
};

export default App;
