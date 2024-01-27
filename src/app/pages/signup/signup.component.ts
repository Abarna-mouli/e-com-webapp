import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signUpForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    birthDate: new FormGroup({
      day: new FormControl("", [
        Validators.required,
        Validators.min(1),
        Validators.max(31),
      ]),
      month: new FormControl("", [
        Validators.required,
        Validators.min(1),
        Validators.max(12),
      ]),
      year: new FormControl("", [
        Validators.required,
        Validators.min(1900),
        Validators.max(new Date().getFullYear()),
      ]),
    }),
  });

  updateProfile() {
    this.signUpForm.patchValue({
      name: "Jane",
      birthDate: {
        day: "1",
        month: "1",
        year: "2000",
      },
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}


