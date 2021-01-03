import {AbstractControl,ValidatorFn} from '@angular/forms';
export function NameValidation():ValidatorFn{
    return (control:AbstractControl):{[key:string]:boolean}|null =>{
        if(control.value.trim()=="flipkart"){
            return{'NameNotAllowed':true};
        }
        return null;
    };
}