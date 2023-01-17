import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Apple -  Iphone 17 Plus Mega'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(5),
  // });

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.min(0), Validators.required] ],
    existencias: [ ,  [Validators.min(0), Validators.required] ]
  });
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Apple  - Iphone 17 Pro Max',
      precio: 300,
      existencias: 2
    });
  }

  campoValido( campo: string ){
    return this.miFormulario.controls[ campo ].errors
            && this.miFormulario.controls[ campo ].touched;
  }

  guardar(){
    if(this.miFormulario.valid){
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
    }else{
      this.miFormulario.markAllAsTouched();

    }


  }

}
