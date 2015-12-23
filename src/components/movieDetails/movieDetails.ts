import {Component} from 'angular2/core';
import {RouteParams, RouterLink} from 'angular2/router';
import {MovieApi} from '../../services/movieApiService';
import {Movie} from '../../models/movie';

@Component({
    selector: 'movieDetails',
    directives: [RouterLink],
    templateUrl: 'components/movieDetails/movieDetails.html',
    styleUrls: ['components/movieDetails/movieDetails.css']
})
export class MovieDetails {
    movie: Movie;

    constructor(movieApi: MovieApi, routeParams: RouteParams) {
        movieApi.getMovieById(routeParams.params['movieId']).then((movie) => {
            this.movie = movie;
        });

        //movieApi.getMovieByIdRx(routeParams.params['movieId']).subscribe((movie) => {
        //    this.movie = movie;
        //})
    }
}
