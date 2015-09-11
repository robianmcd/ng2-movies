import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/forms';
import {RouterLink} from 'angular2/router';
import {MovieApi} from '../../services/movieApiService';
import {Movie} from "../../models/movie";

@Component({
    selector: 'home'
})
@View({
    template: `
<div>
    <h1 class="text-center">Movie Database</h1>

    <form class="form-inline">
        <div class="form-group">
          <label for="search">Search</label>
          <input [(ng-model)]="search" type="text" class="form-control" id="test">
        </div>
    </form>

    <div *ng-if="movies">
        <div *ng-for="#movie of getFilteredMovies()" class="media movie-list-item" [router-link]="['/movieDetails', {movieId: movie.id}]">
            <div class="media-left">
                <div class="poster-container">
                    <img class="media-object movie-poster" [src]="movie.posterUrl">
                </div>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{movie.title}} <span class="badge">{{movie.imdbRating}}</span></h4>

                <div>
                    {{movie.plot}}
                </div>
                <div class="released-date">
                    Released: {{movie.getFormattedDate()}}
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink]
})
export class Home {
    movies:Movie[];
    search:string = '';

    constructor(movieApi:MovieApi) {
        movieApi.getMovies().then((movies) => {
            this.movies = movies;
        });
        
        //movieApi.getMoviesRx().subscribe(movies => {
        //    this.movies = movies
        //});
    }

    getFilteredMovies() {
        return this.movies.filter((movie) => {
            var title = movie.title.toLowerCase();
            var search = this.search.toLowerCase();
            return title.indexOf(search) !== -1;
        });
    }
}