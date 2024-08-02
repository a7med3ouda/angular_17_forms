import { FormControl } from '@angular/forms';

export interface IAddress {
  street: string;
  city: string;
}
export interface IAddressForm {
  street: FormControl<string | null>;
  city: FormControl<string | null>;
}
