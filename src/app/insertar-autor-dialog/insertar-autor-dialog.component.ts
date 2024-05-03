import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-autor-dialog',
  templateUrl: './insertar-autor-dialog.component.html',
  styleUrls: ['./insertar-autor-dialog.component.css']
})
export class InsertarAutorDialogComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA,) public data: any,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pseudonimo: [''],
      fechaNacimiento: ['', Validators.required],
      biografia: ['', Validators.required],
      url: ['',],
    });
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.formulario.value);
  }

}
