import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitLoginForm(form: NgForm) {

    console.log(form.value.email);
    console.log(form.value.password);

   
  }

  
    ngOnInit(): void {
         }
    }


