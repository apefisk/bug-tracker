import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenStringValidator(strReg: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const str = control.value;
    const invalid = strReg.test(str);
    return invalid ? { 'forbiddenString': {str} } : null;
  }
}
