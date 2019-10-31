// https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
// npm install bootstrap @types/bootstrap react-bootstrap @types/react-bootstrap -D
// https://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google

// @ts-ignore
// import Toggle from 'react-bootstrap-toggle';


import React, {Fragment, useEffect, useState} from 'react';
// import T from "prop-types";

import {Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import {TV_SHOW_TYPE, TV_SHOW_TYPE_INDEX, URL_BASE, URL_PARAMS, CURRENT_VIEW} from "./config";
import {List} from "./components/List";
import {TVShowTypeSwitcher} from "./components/TVShowTypeSwitcher";
import {BreadcrumbBar} from "./components/BreadcrumbBar";
import {Loader} from "./components/Loader";
import {FetchData} from "./components/FetchData";
import {Info} from './components/Info';


const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentView, setCurrentView] = useState(CURRENT_VIEW.MAIN);
    const [tvshowtype, setTVShowType] = useState({type: TV_SHOW_TYPE_INDEX.POPULAR, page: 1}); // TODO: UGLY, need TypeScipt ?

    const [listData, setListData] = useState(
        {
            data: [],

            show_id: null,
            season_id: null,
            episode_id: null,

            aditional_id_field: null,
            // seria_id: null,

            infoData: null,
        }
    );


    // const [current_aditional_id_field, setCurrentAditionalIdField] = useState(null);
    //
    // const [current_show_id, setCurrentShowId] = useState("");
    // const [current_episode_id, setCurrentEpisodeId] = useState("");
    // // const [currentViewItemClickHandler, settViewItemClickHandler] = useState(MAIN_VIEW_handleItemClick);
    // const [infoData, setInfoData] = useState({});


    const setTVShowType_by_type = (show_type) => {
        const val = {...tvshowtype, type: show_type, page: 1};
        setTVShowType(val);
        FetchDataFromServer(val);
    };

    const setTVShowType_by_page = (page) => {
        const val = {...tvshowtype, page: page};
        setTVShowType(val);
        FetchDataFromServer(val);
    };


    // const [data, setData] = useState([]);

    const FetchDataFromServer = (tvshowtype) => {
        const url_params = tvshowtype.page === 1 ? '' : `&page=${tvshowtype.page}`;
        const url = TV_SHOW_TYPE[tvshowtype.type].url + url_params;

        // TODO: https://stackoverflow.com/questions/58593627/how-can-i-destructure-a-state-array-of-objects-in-this-react-component-to-use-in
        FetchData(url, (request_data) => setListData({
            ...listData,
            data: request_data.results,
            infoData: request_data
        }), setIsLoading);
        // FetchData(url, (request_data) => {
        //     let v = listData;
        //     v.data = request_data.results;
        //     setListData(v);
        //     // listData.data = request_data.results
        // }, setIsLoading);
    };


    const handleItemClick = (clicked_item) => {
        let url = '';
        let handleDataFunction = null;

        switch (currentView) {
            case CURRENT_VIEW.MAIN:
                setCurrentView(CURRENT_VIEW.SHOW_INFO);
                url = `${URL_BASE}${clicked_item.id}${URL_PARAMS}`;

                handleDataFunction = (responce_data) => {
                    setListData({
                        ...listData,
                        aditional_id_field: "season_number",
                        show_id: clicked_item.id,
                        data: responce_data.seasons,
                        infoData: responce_data
                    })
                };
                break;

            case CURRENT_VIEW.SHOW_INFO:
                setCurrentView(CURRENT_VIEW.SEASON_INFO);

                url = `${URL_BASE}${listData.show_id}/season/${clicked_item.season_number}${URL_PARAMS}`;
                handleDataFunction = (responce_data) => {
                    setListData({
                        ...listData,
                        season_id: clicked_item.season_number,
                        data: responce_data.episodes,
                        infoData: responce_data
                    });
                };
                break;


            case CURRENT_VIEW.SEASON_INFO:
                setCurrentView(CURRENT_VIEW.EPISODE_INFO);

                url = `${URL_BASE}${listData.show_id}/season/${listData.season_id}/episode/${clicked_item.episode_number}${URL_PARAMS}`;
                handleDataFunction = (responce_data) => {
                    setListData({
                        ...listData,
                        episode_id: clicked_item.episode_number,
                        // data: responce_data.episodes,
                        // infoData: responce_data
                    });
                };
                break;
            default:
                alert('Unknown currentView');

        }

        FetchData(url, handleDataFunction, setIsLoading);
    };


    // init
    useEffect(() => FetchDataFromServer(tvshowtype), []);

    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
                {currentView !== CURRENT_VIEW.MAIN ? <BreadcrumbBar page={currentView}/> : null}

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                    {currentView === CURRENT_VIEW.MAIN
                        ? <Nav>
                            <TVShowTypeSwitcher
                                tvshow={tvshowtype}
                                onChangeHandle={setTVShowType_by_type}/>
                        </Nav>
                        : null}

                </Navbar.Collapse>
            </Navbar>

            {isLoading ? (<Loader/>) : (
                <Fragment>
                    {/*show additional info except main page*/}
                    {currentView !== CURRENT_VIEW.MAIN
                        ? <Info infoData={listData.infoData}/>
                        : null}


                    <List
                        listData={listData}

                        current_view={currentView}

                        onPageChange={setTVShowType_by_page}
                        handleItemClick={handleItemClick}/>
                </Fragment>
            )}

        </Fragment>
    );
};

export default App;
