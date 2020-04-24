import { Component } from '@angular/core';

@Component({
    selector:'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent{
    loggedIn: boolean = false;
    userName: string = "";

    loginNow(){
        if (this.userName == "") alert("Please Enter User Name!");
        else this.loggedIn = !this.loggedIn;
    }
}