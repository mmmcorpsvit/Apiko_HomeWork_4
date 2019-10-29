const API_KEY = "520586ec107ebeef4af3a185ee10ae9b";
const URL_BASE = "https://api.themoviedb.org/3/";
const URL_PARAMS = `?language=en-US&api_key=${API_KEY}`;
const TV_SHOW_CAPTION_SUFIX = ' TV shows';

// class TV_SHOW_TYPE_ITEM{
//   constructor();
//
// };

export const TV_SHOW_TYPE_INDEX = {
    POPULAR: 'POPULAR',
    TOP_RATED: 'TOP_RATED',
};

export const TV_SHOW_TYPE = {
    POPULAR: {
        name: `Popular${TV_SHOW_CAPTION_SUFIX}`,
        url: `${URL_BASE}tv/popular${URL_PARAMS}`
    },

    TOP_RATED: {
        name: `Top Rated${TV_SHOW_CAPTION_SUFIX}`,
        url: `${URL_BASE}tv/top_rated${URL_PARAMS}`
    },

};


export const CURRENT_VIEW = {
    MAIN: 'MAIN',
    MOVIE_INFO: 'MOVIE_INFO',
    SEASON_INFO: 'SEASON_INFO',
    EPISODE_INFO: 'EPISODE_INFO',
};
