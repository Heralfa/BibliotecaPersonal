import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import './login.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  visible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.formulario.value);
    this.router.navigate(['/biblioteca']);
  }

  visibilidad(){
    this.visible = !this.visible;
  }

}
