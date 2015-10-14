import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MovieApi} from './services/movieApiService';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from "./components/app/app";

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS, MovieApi]);