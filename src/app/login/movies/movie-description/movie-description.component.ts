import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-movie-description',
    templateUrl: 'movie-description.component.html',
    styleUrls: ['movie-description.component.css']
})

export class AppMovieDescription{
    @Input() description: string = "many many words";
}