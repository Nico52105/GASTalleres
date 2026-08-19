import { Component } from '@angular/core';
import { Categorias } from '../../Componentes/categorias/categorias';
import { PropuestasValor } from '../../Componentes/propuestas-valor/propuestas-valor';
import { Banner } from '../../Componentes/banner/banner';

@Component({
  selector: 'app-home',
  imports: [Banner, PropuestasValor, Categorias],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
