import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './login/movies/movies.component';
import { AppFooter } from './footer/footer.component';
import { AppHeader } from './header/header.component';
import { AppNav } from './nav/nav.component';
import { AppMovieDescription } from './login/movies/movie-description/movie-description.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieComponent,
    AppHeader,
    AppFooter,
    AppNav,
    AppMovieDescription
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
