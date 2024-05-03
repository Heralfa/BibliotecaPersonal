import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-libro-dialog',
  templateUrl: './insertar-libro-dialog.component.html',
  styleUrls: ['./insertar-libro-dialog.component.css']
})
export class InsertarLibroDialogComponent implements OnInit {
  formulario: FormGroup;

  autores: any[] = ['Jostein Gaardeer', 'Stephen King', 'Kiera Caas'];

  constructor(
    @Inject(MAT_DIALOG_DATA,) public data: any,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      id: ['',],
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      anoPublicacion: ['', Validators.required],
      sinopsis: ['', Validators.required],
      autores: ['', Validators.required],
      editorial: ['', Validators.required],
      url: ['',],
    });
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.formulario.value);
  }

}
