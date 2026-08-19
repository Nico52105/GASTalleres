import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './Componentes/menu/menu';
import { Footer } from './Componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RepuestosOnline');
}
