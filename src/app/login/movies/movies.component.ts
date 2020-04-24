import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    selector: 'app-movie',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})

export class MovieComponent{
    @Input() display: boolean;
    @Input() user: string;

    awardDimension: number = 35;

    movieList: IMovie[] = [];
    
    constructor(private movieService: MovieService){};

    ngOnInit(){
        this.movieService.getMovies().subscribe(data => this.movieList = data);
    }
}