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
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule,CommonModule,FormsModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatCardModule,MatIconModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signUpForm = new FormGroup({
    Firstname: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit() {
    console.log(this.signUpForm.value);
  }
}


