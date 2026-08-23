import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type ParametrosMenu = {
  Titulo: string;
  Opciones: { Descripcion: string; Destino: string }[];
  Buscar: () => void;
  Comprar: () => void;
  Usuario: string;
};

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  @Input() Parametros: ParametrosMenu = {
    Titulo: '',
    Opciones: [],
    Buscar: () => {},
    Comprar: () => {},
    Usuario: '',
  };
}
