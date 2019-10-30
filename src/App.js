// https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
// npm install bootstrap @types/bootstrap react-bootstrap @types/react-bootstrap -D
// https://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google

// @ts-ignore
// import Toggle from 'react-bootstrap-toggle';


import React, {Fragment, useEffect, useState} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// import {Header} from "./components/Header";
import {List} from "./components/List";

//import {ITVShowListData} from "./config";
// import {reducer, initialState} from "./components/Reducer";
import {Nav, Navbar} from "react-bootstrap";
import {TVShowTypeSwitcher} from "./components/TVShowTypeSwitcher";
import {BreadcrumbBar} from "./components/BreadcrumbBar";
import {Loader} from "./components/Loader";
// import {ACTIONS} from "./components/Reducer";
import {TV_SHOW_TYPE, TV_SHOW_TYPE_INDEX, URL_BASE, URL_PARAMS, CURRENT_VIEW} from "./config";
import {FetchData} from "./components/FetchData";
// import T from "prop-types";
import {Info} from './components/Info';


const App = () => {
    const FetchDataFromServer = () => {
        // console.log(movie, TV_SHOW_TYPE[movie]);
        let url_params = '';
        let url = '';

        url_params = movie.page === 1 ? '' : `&page=${movie.page}`;
        url = TV_SHOW_TYPE[movie.type].url + url_params;

        // url_params = movie.page === 1 ? '' : `&page=${movie.page}`;
        // url = TV_SHOW_TYPE[movie.type].url + url_params;

        FetchData(url, (request_data) => setData(request_data.results), setIsLoading);
        // setData(data.results);
    };


    // loading
    const [isLoading, setIsLoading] = useState(true);
    // const [movie_type, setMovieType] = useState(TV_SHOW_TYPE_INDEX['POPULAR']); // TODO: UGLY, need TypeScipt ?

    // const [breadcrumbBarPath, setbreadcrumbBarPath] = useState([]);


    const [movie, setMovie] = useState({type: TV_SHOW_TYPE_INDEX.POPULAR, page: 1}); // TODO: UGLY, need TypeScipt ?

    const setMovieType = (movie_type) => {
        movie.type = movie_type;    // TODO: чому це працюэ??? баг?
        movie.page = 1;
        setCurrentView(CURRENT_VIEW.MAIN);
        FetchDataFromServer();
    };

    const setMoviePage = (movie_page) => {
        movie.page = movie_page;
        FetchDataFromServer();
    };


    const [data, setData] = useState([]);


    const [currentView, setCurrentView] = useState(CURRENT_VIEW[CURRENT_VIEW.MAIN]);
    const [infoData, setInfoData] = useState({});


    const handleItemClick = (id) => {

        // e.preventDefault();
        // console.log(e.target.parent);
        setCurrentView(CURRENT_VIEW.MOVIE_INFO);

        // console.log('handleItemClick: ' + id, currentView);

        FetchData(`${URL_BASE}${id}${URL_PARAMS}`,
            (request_data) => {
                setData(request_data.seasons);
                setInfoData(request_data);
            }, setIsLoading);
    };

    // init
    useEffect(() => FetchDataFromServer(), []);

    // isLoading ? (
    //     <Loader/>
    // ) :

    return (
        <Fragment>

            <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
                {/*<a className="navbar-brand" href="/">HomeWork 4</a>*/}
                {currentView !== CURRENT_VIEW.MAIN ? <BreadcrumbBar/> : null}


                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">


                    {currentView === CURRENT_VIEW.MAIN
                        ?
                        <Nav>
                            <TVShowTypeSwitcher movie={movie} onChangeHandle={setMovieType}/>
                        </Nav>
                        : null}


                    {/*<Form inline>*/}
                    {/*<Filter handleFilter={props.handleFilter}/>*/}
                    {/*</Form>*/}

                </Navbar.Collapse>
            </Navbar>

            {/*<Header MOVIE_PAGE={MOVIE_DATA.MOVIE_PAGE} MOVIE_TYPE={MOVIE_DATA.MOVIE_TYPE}/>*/}
            {/*{ data.length >0 ? (*/}
            {/*    <TVShowList data={data} movie_page={movie.page}/>*/}
            {/*): null}*/}

            {isLoading ? (<Loader/>) : (
                <Fragment>
                    {/*show additional info except main page*/}
                    {currentView !== CURRENT_VIEW[CURRENT_VIEW.MAIN]
                        ? <Info data={infoData}/>
                        : null}


                    <List
                        data={data}
                        current_view={currentView}
                        movie_page={movie.page}
                        onPageChange={setMoviePage}
                        handleItemClick={handleItemClick}/>
                </Fragment>
            )}

        </Fragment>
    );
};

export default App;
