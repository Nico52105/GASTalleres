import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu, ParametrosMenu } from './Componentes/menu/menu';
import { Footer } from './Componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RepuestosOnline');
  protected readonly parametrosMenu: ParametrosMenu = {
    Titulo: 'MotorParts',
    Opciones: [
      { Descripcion: 'Inicio', Destino: 'Home' },
      { Descripcion: 'Brands', Destino: 'Brands' },
      { Descripcion: 'Deals', Destino: 'Deals' },
      { Descripcion: 'My Garage', Destino: 'My-Garage' },
    ],
    Buscar: () => {},
    Comprar: () => {},
    Usuario: 'Usuario',
  };
}
