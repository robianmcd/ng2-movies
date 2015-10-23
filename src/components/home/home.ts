import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {MovieApi} from '../../services/movieApiService';
import {Movie} from "../../models/movie";

@Component({
    selector: 'home'
})
@View({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RouterLink],
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
                <div *ng-for="#movie of getFilteredMovies()" class="media movie-list-item" [router-link]="['/MovieDetails', {movieId: movie.id}]">
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
    styles: [`
        .movie-list-item {
            padding: 10px;
            cursor: pointer;
        }

        .movie-list-item:hover {
            background-color: #eee;
        }

        .movie-list-item .poster-container {
            height: 200px;
            width: 150px;
        }

        .movie-poster {
            max-height: 200px;
            max-width: 150px;
        }

        .released-date {
            margin-top: 20px;
        }
    `]

})
export class Home {
    movies;
    search;

    constructor(movieApi) {
        movieApi.getMovies().success((movies) => {
            this.movies = movies;
        });
    }

    getFilteredMovies() {
        return this.movies.filter((movie) => {
            var title = movie.name.toLwoerCase();
            var search = this.search.toLwoerCase();
            var isMatch = title.indexOf(search) === true;
        });
    }
}