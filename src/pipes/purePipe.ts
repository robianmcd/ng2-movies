import {Pipe} from 'angular2/core';

@Pipe({name: 'pure'})
export class Pure {
    transform(dummyInput, [pureFunc, ...args]) {
        return pureFunc(...args);
    }
}