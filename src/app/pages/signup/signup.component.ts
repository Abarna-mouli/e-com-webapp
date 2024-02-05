import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HomeComponent,MatButtonModule,CommonModule,FormsModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatCardModule,MatIconModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signUpForm = new FormGroup({
    Firstname: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  hide = true;
  

 
  getErrorMessage() {
    let result:any={}
    if (this.signUpForm.get('email')?.hasError('required')) {
      result["email"]='You must enter a value';
    }
    else if(this.signUpForm.get('email')?.hasError('email'))
    {
      result["email"]='Not a valid email';
    }
    else{
      result["email"]=''
    }
    if(this.signUpForm.get('Firstname')?.hasError('required'))
    {
      result["Fname"]='You must enter a value';
    }
    else if(this.signUpForm.get('Firstname')?.hasError('minlength'))
    {
      result["Fname"]='First Name should atleast be 5 characters';
    }
    else{
      result["Fname"]=''
    }
    return result;
  }
  onSubmit() {
    console.log(this.signUpForm.value);
  }
}


