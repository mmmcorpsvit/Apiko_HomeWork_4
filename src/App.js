// https://sentry.io
// https://react-bootstrap.github.io/components/forms/
// https://codesandbox.io/s/zKrK5YLDZ
// https://github.com/davidhu2000/react-spinners
// https://www.npmjs.com/package/react-loading-overlay
// https://blog.logrocket.com/patterns-for-data-fetching-in-react-981ced7e5c56/
// https://stackoverflow.com/questions/32332656/navbar-fixed-top-show-content-behind-navbar

import React, {Fragment, useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Header} from "./components/Header";
import {PostList} from "./components/PostList";
import {Loader} from "./components/Loader";

// Sentry.init({dsn: "https://0635ca102d79469daab687b0385f4cb6@sentry.io/1785245"});

const App = () => {
    const initialItemsCount = 10;   // Define initial counts of PostListItems
    const moreItemsCountOnPage = 10;    // Define PostList


    // data
    const [data, setData] = useState([]);


    // loading
    const [isLoading, setIsLoading] = useState(true);


    // more button
    // let showMoreButton = true;
    const [PostCount, setCount] = useState(initialItemsCount);
    const handleIncrement = () => setCount(currentValue => {
        let result = currentValue + moreItemsCountOnPage > data.length
            ? data.length
            : currentValue + moreItemsCountOnPage;

        return result;
    });
    // useEffect(handleIncrement, []);


    // search text
    const [FilterText, setFilterText] = useState('');

    const handleFilter = event => setFilterText(event.target.value.trim().toLowerCase());

    // loading data on init
    useEffect(() => {
        // setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(
                (result) => {
                    result.forEach((item, index) => {
                        // append new fields to data list
                        // item.show = index <= initialItemsCount;
                        // item.show = true;
                        item.forSearchText = (`${item.title} ${item.body}`).toLowerCase().trim();
                    });

                    setData(result);
                    setIsLoading(false);
                });

    }, []);

    return isLoading ? (
            <Loader/>
        ) :

        (
            <Fragment>
                <Header handleIncrement={handleIncrement}
                        handleFilter={handleFilter}
                        showMoreButton={PostCount !== data.length}/>

                <main role="main" className="container">
                    <PostList
                        data={data}
                        PostCount={PostCount}
                        FilterText={FilterText}/>
                </main>
            </Fragment>
        );
};

export default App;
