import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {



  get emailErrorMsg(): string {
   const errors = this.miFormulario.get('email')?.errors;
   let message: string = '';
   if ( errors?.['required'] ){
      message = 'Email es obligatorio';
   } else if ( errors?.['pattern']){
    message = 'Email mal formado';
   } else if( errors?.['emailRegistrado']){
    message = 'El email ya existe';
   }

   return message;
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPatter )]],
    email:['',[ Validators.required, Validators.pattern( this.validatorService.emailPattern )], [ this.emailValidator ]],
    username:['',[ Validators.required, this.validatorService.noPuedeSerCrakosi ]],
    password:['',[ Validators.required, Validators.minLength(6) ]],
    confirmarPassword:['',[ Validators.required ]],
  },{
    validators: [ this.validatorService.camposIguales('password', 'confirmarPassword' )]
  })

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorsService,
               private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Ives Mejia',
      email: 'test1@test.com',
      username: 'Thanos'
    })
  }

  validarCampo( campo: string){
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched;
  }



  guardar(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
