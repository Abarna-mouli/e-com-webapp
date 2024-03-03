import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HomeComponent,FooterComponent,SearchbarComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

}
