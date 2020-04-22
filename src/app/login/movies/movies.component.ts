import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-movie',
    templateUrl: 'movies.component.html'
})

export class MovieComponent{
    @Input() display: boolean;
    @Input() user: string;
}