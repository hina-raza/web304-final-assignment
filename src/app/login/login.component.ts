import { Component } from '@angular/core';

@Component({
    selector:'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent{
    loggedIn: boolean = false;
    userName: string = "May";

    loginNow(){
        this.loggedIn = !this.loggedIn;
    }
}