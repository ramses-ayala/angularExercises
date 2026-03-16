import { Component } from '@angular/core';
import { CounterComponent } from './pages/counter/counter.component';
import { ShoppingCartComponent } from './pages/shoppingCart/shoppingCart.component';
import { Searcher } from './pages/searcher/searcher.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, ShoppingCartComponent, Searcher],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
