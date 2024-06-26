import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { RegistroComponent } from './pages/registro/registro.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NativeDateModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core'


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    NativeDateModule,
    MatNativeDateModule
  ]
})
export class AuthModule { }
