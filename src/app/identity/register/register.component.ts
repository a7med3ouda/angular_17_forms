import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IUserRegisterForm } from '../../@types/interfaces/iuser';
import { NgFor, NgIf } from '@angular/common';
import { IAddressForm } from '../../@types/interfaces/iaddress';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgFor, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup<IUserRegisterForm>(
    {
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', Validators.required),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
      }),
      phones: new FormArray([this.createPhoneForm()]),
    },
    {
      validators: this.passwordMatchValidator,
    }
  );

  get fullName() {
    return this.registerForm.get('fullName') as FormControl<string | null>;
  }
  get email() {
    return this.registerForm.get('email') as FormControl<string | null>;
  }
  get password() {
    return this.registerForm.get('password') as FormControl<string | null>;
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl<
      string | null
    >;
  }
  get address() {
    return this.registerForm.get('address') as FormGroup<IAddressForm>;
  }
  get city() {
    return this.address.get('city') as FormControl<string | null>;
  }
  get street() {
    return this.address.get('street') as FormControl<string | null>;
  }
  get phones() {
    return this.registerForm.get('phones') as FormArray<
      FormControl<string | null>
    >;
  }

  private createPhoneForm() {
    return new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
      Validators.minLength(5),
    ]);
  }

  addPhone() {
    this.phones.push(this.createPhoneForm());
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
    if (!this.registerForm.valid) return;
    // post to api here
    alert('Form Submitted: ' + JSON.stringify(this.registerForm.value));
  }
}
