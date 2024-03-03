import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HomeComponent,FooterComponent,SearchbarComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
