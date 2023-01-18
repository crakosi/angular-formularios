import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

 public nombreApellidoPatter : string = '([a-zA-Z]+) ([a-zA-Z]+)';
 public emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerCrakosi( control: FormControl ): ValidationErrors | null  {
    const valor: string = control.value?.trim().toLowerCase();
    console.log(valor);
    if( valor === 'crakosi'){
      return {
        noCrakosi: true
      }
    }
    return null;
  }
}
