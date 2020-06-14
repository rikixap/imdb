class MovieGet {
    static getMovies(keyword){
        return fetch("http://www.omdbapi.com/?apikey=7870a09b&s="+ keyword)
    .then(response => response.json())
      .then(response => response.Search);        
     }
}
export default MovieGet;