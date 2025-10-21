import { Component } from '@angular/core';
import { ItemsListComponent } from './features/items/items-list/items-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  appTitle = 'Tienda de Zapatos - Silver Shoes';
}
