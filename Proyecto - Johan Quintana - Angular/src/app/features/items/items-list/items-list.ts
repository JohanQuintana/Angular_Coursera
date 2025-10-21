import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemCardComponent, Item } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [NgFor, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css'
})
export class ItemsListComponent {
  items: Item[] = [
    { nombre: 'Zapatilla Running Dama', descripcion: 'Malla respirable, suela ligera', precio: 45.99 },
    { nombre: 'Mocasín Caballero', descripcion: 'Cuero sintético, casual', precio: 39.50 },
    { nombre: 'Tenis Niño', descripcion: 'Cierre con velcro, muy cómodos', precio: 24.90 },
  ];

  agregar(nombre: string, descripcion: string, precioStr: string) {
  const precio = Number(precioStr);
  if (!nombre.trim() || !descripcion.trim() || isNaN(precio)) return;

  this.items = [
    ...this.items,
    { nombre: nombre.trim(), descripcion: descripcion.trim(), precio }
  ];
}

}
