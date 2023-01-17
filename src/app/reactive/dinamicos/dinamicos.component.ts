import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Mari Bross', Validators.required],
      ['FIFA 2000', Validators.required]
    ], Validators.required)
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  nuevoFavorito : FormControl = this.fb.control('',Validators.required);
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  agregarFavorito(){
    console.log('Agregando favorito...');
    if( this.nuevoFavorito.valid ){
      this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
      //this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );
      this.nuevoFavorito.reset();
    }
  }

  validarCampo (campo: string){
    return this.miFormulario.controls[ campo ].errors
    && this.miFormulario.controls[ campo ].touched;
  }

  borrar( index: number){
    console.log(index);
    this.favoritosArr.removeAt(index);
  }

  guardar(){
    if( this.miFormulario.valid ){
      console.log( this.miFormulario.value );
      this.miFormulario.reset();
    }else{
      this.miFormulario.markAllAsTouched();
      console.log( 'Formualrio Inválido' );
    }
  }
}
