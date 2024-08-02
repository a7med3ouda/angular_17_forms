import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IAddress, IAddressForm } from './iaddress';

export interface IUser {
  id?: number;
  fullName: string;
  email: string;
  password: string;
  address: IAddress;
  phones: string[];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  fullName: string;
  email: string;
  password: string;
  address: IAddress;
  phones: string[];
  confirmPassword: string;
}

export interface IUserRegisterForm {
  fullName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  address: FormGroup<IAddressForm>;
  phones: FormArray<FormControl<string | null>>;
  confirmPassword: FormControl<string | null>;
}
