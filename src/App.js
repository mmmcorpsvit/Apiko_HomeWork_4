// https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
// npm install bootstrap @types/bootstrap react-bootstrap @types/react-bootstrap -D
// @ts-ignore
// import Toggle from 'react-bootstrap-toggle';


import React, {Fragment, useEffect, useState, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {Header} from "./components/Header";
import {TVShowList} from "./components/TVShowList";

//import {ITVShowListData} from "./config";
// import {reducer, initialState} from "./components/Reducer";
import {Form, Nav, Navbar} from "react-bootstrap";
import {TVShowTypeSwitcher} from "./components/TVShowTypeSwitcher";
import {BreadcrumbBar} from "./components/BreadcrumbBar";
import {Loader} from "./components/Loader";
// import {ACTIONS} from "./components/Reducer";
import {TV_SHOW_TYPE, TV_SHOW_TYPE_INDEX} from "./config";
import {FetchData} from "./components/FetchData";
import T from "prop-types";


const App = () => {
    // loading
    const [isLoading, setIsLoading] = useState(true);

    // const [movie_type, setMovieType] = useState(TV_SHOW_TYPE_INDEX['POPULAR']); // TODO: UGLY, need TypeScipt ?

    const [movie, setMovie] = useState({type: TV_SHOW_TYPE_INDEX.POPULAR, page: 0}); // TODO: UGLY, need TypeScipt ?
    // movie.propTypes = {
    //     type: T.string.isRequired,
    //     page: T.number.isRequired
    // };


    // const [movie_type, setMovieType] = useState('POPULAR'); // TODO: UGLY, need TypeScipt ?
    // const [movie_page, setMoviePage] = useState(0);

    // const [movie_type, setMovieType] = useState(); // TODO: UGLY, need TypeScipt ?
    const [breadcrumbBarPath, setbreadcrumbBarPath] = useState(0);

    const setMovieType2 = (movie_type2) => {
        // movie_type.setValue(movie_type);

        // setMovie(movie.type = movie_type2);
        movie.type = movie_type2; // TODO: ?????????????
        // setMovie({...movie, movie.type=movie_type2}
        // movie.type = movie_type2}
        // );

        // console.log(movie_type2, TV_SHOW_TYPE[movie.type]);
        FetchDataFromServer();
    };


    const [data, setData] = useState([]);


    const FetchDataFromServer = () => {
        // console.log(movie, TV_SHOW_TYPE[movie]);
        FetchData(TV_SHOW_TYPE[movie.type].url, setData, setIsLoading);
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

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <BreadcrumbBar/>

                    <Nav className="mr-auto">
                        <TVShowTypeSwitcher movie={movie} onChangeHandle={setMovieType2}/>
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
                <TVShowList data={data} movie_page={movie.page}/>
            )}

        </Fragment>
    );
};

export default App;
