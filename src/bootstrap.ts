import {bootstrap, bind} from 'angular2/angular2';
import {App} from './components/app/app';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {MovieApi} from './services/movieApiService';
import {HTTP_BINDINGS} from 'angular2/http';

bootstrap(App, [ROUTER_BINDINGS, MovieApi, HTTP_BINDINGS]);