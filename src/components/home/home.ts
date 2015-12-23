import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouterLink} from 'angular2/router';
import {MovieApi} from '../../services/movieApiService';
import {Movie} from '../../models/movie';

import {Pure} from '../../pipes/purePipe';

@Component({
    selector: 'home',
    pipes: [Pure],
    directives: [FORM_DIRECTIVES, RouterLink],
    template: `
        <div>
            <h1 class="text-center">Movie Database</h1>

            <form class="form-inline">
                <div class="form-group">
                  <label for="search">Search</label>
                  <input [(ngModel)]="search" type="text" class="form-control" id="test">
                </div>
            </form>

            <div *ngIf="movies">
                <div *ngFor="#movie of null | pure:getFilteredMovies:movies:search" class="media movie-list-item" [routerLink]="['/MovieDetails', {movieId: movie.id}]">
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
    movies:Movie[];
    search:string = '';

    constructor(movieApi:MovieApi) {
        movieApi.getMovies().then((movies) => {
            this.movies = movies;
        });

        movieApi.getMoviesRx().subscribe(movies => {
            this.movies = movies
        });
    }

    getFilteredMovies(movies, search) {
        if(search) {
            search = search.toLowerCase();
        }

        return movies.filter((movie) => {
            var title = movie.title.toLowerCase();
            if(search) {
                return title.indexOf(search) !== -1;
            } else {
                return true;
            }
        });
    }
}