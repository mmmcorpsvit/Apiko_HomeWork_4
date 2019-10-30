export const FetchData = (url, HandleData, HandleIsLoading) => {
    console.log(url);

    HandleIsLoading(true);
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                HandleData(result);
                HandleIsLoading(false);
            });

    // return true;
};
