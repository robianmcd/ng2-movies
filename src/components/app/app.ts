import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Home} from 'components/home/home';
import {MovieDetails} from 'components/movieDetails/movieDetails';

@Component({
    selector: 'app'
})
@View({
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [RouterOutlet]
})
@RouteConfig([
    { path: '/', component: Home, as: 'home'},
    { path: '/details/:movieId', component: MovieDetails, as: 'movieDetails' }
])
export class App {
    test: string;

    constructor() {

    }
}
