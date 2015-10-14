import {Http} from 'angular2/http';
import {Movie} from '../models/movie';
import {Injectable} from 'angular2/core';
import {Observable} from "../../node_modules/angular2/src/core/facade/async";

@Injectable()
export class MovieApi {
    constructor(private http:Http) {
    }

    getMovies():Promise<Movie[]> {
        return window.fetch('/api/movies')
            .then((response) => response.json())
            .then((moviesData) => {
                return moviesData.map(movie => this.parseMovieData(movie));
            });
    }

    getMovieById(id):Promise<Movie> {
        return window.fetch(`/api/movies/${id}`)
            .then((response) => response.json())
            .then(movie => this.parseMovieData(movie));
    }

    getMoviesRx() {
        return this.http.get('/api/movies')
            .map(response => response.json())
            .map((movies) => {
                return movies.map(movie => this.parseMovieData(movie));
            });
    }

    getMovieByIdRx(id) {
        return this.http.get(`/api/movies/${id}`)
            .map(response => response.json())
            .map(movie => this.parseMovieData(movie));
    }

    private parseMovieData(movieData) {
        return new Movie(movieData);
    }
}