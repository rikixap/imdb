import '../component/search-bar.js';
import '../component/movie-list.js';
import ImdbApi from '../data/imdb-api.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const movieListElement = document.querySelector("movie-list");
 
   const onButtonSearchClicked = async () => {
       try {
           const result = await ImdbApi.getMovies(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       movieListElement.movie = results;
   };
 
   const fallbackResult = message => {
       movieListElement.renderError(message);
   };
 
   searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;