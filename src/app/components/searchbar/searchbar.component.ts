import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import{RouterOutlet}from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FooterComponent,CommonModule,FormsModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatButtonModule,MatSlideToggleModule,MatToolbarModule, MatIconModule,MatMenuModule,RouterOutlet],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})

export class SearchbarComponent {
  value = "Search here!";
  constructor(private router: Router) { }

  // Method to navigate to the checkout page
  navigateToCheckout() {
    this.router.navigateByUrl('/checkout');
  }
}
