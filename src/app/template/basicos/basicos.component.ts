import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }

  constructor() {
    console.log('Constructor....');

  }

  ngOnInit(): void {
    console.log('ngOnInit....');
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid
    && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido(): boolean {

    return  this.miFormulario?.controls['precio']?.touched
    && this.miFormulario?.controls['precio']?.value < 0;

  }

  // guardar( miFormulario: NgForm ){
  guardar( ){
    console.log('Posteo correcto...');

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });

  }

}
