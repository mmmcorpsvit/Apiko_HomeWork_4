// https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
// npm install bootstrap @types/bootstrap react-bootstrap @types/react-bootstrap -D
// https://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google

// @ts-ignore
// import Toggle from 'react-bootstrap-toggle';


import React, {Fragment, useEffect, useState, useReducer} from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// import {Header} from "./components/Header";
import {List} from "./components/List";

//import {ITVShowListData} from "./config";
// import {reducer, initialState} from "./components/Reducer";
import {Form, Nav, Navbar} from "react-bootstrap";
import {TVShowTypeSwitcher} from "./components/TVShowTypeSwitcher";
import {BreadcrumbBar} from "./components/BreadcrumbBar";
import {Loader} from "./components/Loader";
// import {ACTIONS} from "./components/Reducer";
import {TV_SHOW_TYPE, TV_SHOW_TYPE_INDEX, CURRENT_VIEW} from "./config";
import {FetchData} from "./components/FetchData";
// import T from "prop-types";
import {Info} from './components/Info';


const App = () => {
    const FetchDataFromServer = () => {
        // console.log(movie, TV_SHOW_TYPE[movie]);
        let url_params = movie.page === 1 ? '' : `&page=${movie.page}`;
        let url = TV_SHOW_TYPE[movie.type].url + url_params;
        FetchData(url, setData, setIsLoading);
    };


    // loading
    const [isLoading, setIsLoading] = useState(true);
    // const [movie_type, setMovieType] = useState(TV_SHOW_TYPE_INDEX['POPULAR']); // TODO: UGLY, need TypeScipt ?

    const [movie, setMovie] = useState({type: TV_SHOW_TYPE_INDEX.POPULAR, page: 1}); // TODO: UGLY, need TypeScipt ?

    // const [breadcrumbBarPath, setbreadcrumbBarPath] = useState([]);


    const setMovieType = (movie_type) => {
        // TODO: ?????????????
        movie.type = movie_type;
        movie.page = 1;
        FetchDataFromServer();
    };

    const setMoviePage = (movie_page) => {
        movie.page = movie_page;
        FetchDataFromServer();
    };


    const [data, setData] = useState([]);


    const [currentView, setCurrentView] = useState(CURRENT_VIEW[CURRENT_VIEW.MAIN]);
    const [infoData, setInfoData] = useState({});


    const handleItemClick = (id) =>{
        // e.preventDefault();
        // console.log(e.target.parent);
        console.log(id);
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
                {/*<BreadcrumbBar/>*/}

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">


                    <Nav>
                        <TVShowTypeSwitcher movie={movie} onChangeHandle={setMovieType}/>
                    </Nav>


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
                    {currentView !== CURRENT_VIEW[CURRENT_VIEW.MAIN] ? <Info title={infoData.title} />: null}


                    <List data={data} movie_page={movie.page} onPageChange={setMoviePage} handleItemClick={handleItemClick}/>
                </Fragment>
            )}

        </Fragment>
    );
};

export default App;
