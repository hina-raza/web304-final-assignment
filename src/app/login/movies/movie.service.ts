import { Injectable } from '@angular/core';
import { IMovie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MovieService{

    private movieLink = 'assets/movies.json';

    constructor (private http: HttpClient){};
    
    getMovies(): Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.movieLink);
    }
}