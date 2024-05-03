import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarLibroDialogComponent } from './editar-libro-dialog/editar-libro-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InsertarLibroDialogComponent } from './insertar-libro-dialog/insertar-libro-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { InsertarAutorDialogComponent } from './insertar-autor-dialog/insertar-autor-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NativeDateModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaComponent,
    EditarLibroDialogComponent,
    InsertarLibroDialogComponent,
    InsertarAutorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    NativeDateModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
