import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import{RouterOutlet}from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggleModule,MatToolbarModule, MatIconModule,MatMenuModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
