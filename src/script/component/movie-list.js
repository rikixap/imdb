import './movie-item.js';
 
class MovieList extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    set movie(movie){
        this._movie= movie;
        this.render();
    } 
 
   renderError(message) {
       this.shadowDOM.innerHTML += `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
   render(){
    this.shadowDOM.innerHTML = "";
    this._movie.forEach(movies => {
        const showMovieElement = document.createElement("movie-item");
        showMovieElement.movies = movies
        this.shadowDOM.appendChild(showMovieElement);
    })
}
}
customElements.define("movie-list", MovieList);