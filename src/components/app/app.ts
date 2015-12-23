import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Home} from "../home/home";
import {MovieDetails} from '../movieDetails/movieDetails';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [RouterOutlet, Home, MovieDetails]
})
@RouteConfig([
    { path: '/', component: Home, as: 'Home'},
    { path: '/details/:movieId', component: MovieDetails, as: 'MovieDetails' }
])
export class App {

}
