import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IUserLogin } from '../../@types/interfaces/iuser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: IUserLogin = {
    email: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    // post to api here
    alert('Form Submitted: ' + JSON.stringify(form.value));
  }
}
