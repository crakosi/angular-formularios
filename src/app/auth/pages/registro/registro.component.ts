import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPatter )]],
    email:['',[ Validators.required, Validators.pattern( this.validatorService.emailPattern )]],
    username:['',[ Validators.required, this.validatorService.noPuedeSerCrakosi ]],
  })

  constructor( private fb: FormBuilder, private validatorService: ValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Ives Mejia',
      email: 'mejia@gmail.com',
      username: 'Thanos'
    })
  }

  validarCampo( campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  guardar(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
