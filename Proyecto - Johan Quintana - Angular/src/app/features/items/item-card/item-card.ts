import { Component, HostBinding, Input } from '@angular/core';

export interface Item {
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-item-card',
  standalone: true,
  template: `
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ item?.nombre }}</h5>
      <small>US$ {{ item?.precio?.toFixed(2) }}</small>
    </div>
    <p class="mb-1">{{ item?.descripcion }}</p>
  `
})
export class ItemCardComponent {
  @Input() item?: Item;
  @HostBinding('class') hostClasses = 'list-group-item list-group-item-action';
}
