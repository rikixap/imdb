class MovieItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }
    set movies(movies){
        this._movies = movies;
        this.render();
      }
    render(){
        this.shadowDOM.innerHTML = `
        <div class="col-md-4 my-3">
            <div class="card">
                <img src="${this._movies.Poster}"  class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${this._movies.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${this._movies.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button"  data-toggle="modal" data-target="#moviedetailModal" data-imdbid="${this._movies.imdbID}">Show Details</a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("movie-item",MovieItem);