import React from 'react';

export const FetchData = (url, HandleData, HandleIsLoading) => {
    HandleIsLoading(true);
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                HandleIsLoading(false);
                HandleData(result.results);
            });

    // return true;
};
