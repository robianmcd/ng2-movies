import {Http} from 'http/http';
import {Movie} from '../models/movie';

//Magically make DI work
var Magic = () => () => {};

@Magic()
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

    getMoviesRx(): Rx.IObservable<Movie[]> {
        return this.http.get('/api/movies')
            .toRx()
            .map(response => response.json())
            .map((movies) => {
                return movies.map(movie => this.parseMovieData(movie));
            });
    }

    getMovieByIdRx(id): Rx.IObservable<Movie> {
        return this.http.get(`/api/movies/${id}`)
            .toRx()
            .map(response => response.json())
            .map(movie => this.parseMovieData(movie));
    }

    private parseMovieData(movieData) {
        return new Movie(movieData);
    }
}