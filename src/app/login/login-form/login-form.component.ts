import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService
  ) { }

  form: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  login() {
    // take one operator will close this subject for me.
      this.loginService.login(
        this.form.get("username")?.value,
        this.form.get("password")?.value)
      .subscribe({
        next: () => {},
      });
  }
}
