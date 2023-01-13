import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Ives',
    favoritos: [
      {id:1, nombre: 'Mario Bros'},
      {id:2, nombre: 'FIFA 2000'}
    ]
  };

  validaNombre(){
    console.log(this.miFormulario);

    return this.miFormulario?.controls['nombre']?.invalid
    && this.miFormulario?.controls['nombre']?.touched;
  }

  eliminar( index: number){
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(){
    const juego: Favorito = {
      id:this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push({...juego});
    this.nuevoJuego = '';
  }

  guardar(){
    console.log('Formulario enviado....');

  }

}
