import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-libro-dialog',
  templateUrl: './editar-libro-dialog.component.html',
  styleUrls: ['./editar-libro-dialog.component.css']
})
export class EditarLibroDialogComponent implements OnInit {
  formulario: FormGroup;

  autores: any[] = ['Jostein Gaardeer', 'Stephen King', 'Kiera Caas'];

  constructor(
    @Inject(MAT_DIALOG_DATA,) public data: any,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      libroId: ['', Validators.required],
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      anoPublicacion: ['', Validators.required],
      sinopsis: ['', Validators.required],
      autores: ['', Validators.required],
      editorial: ['', Validators.required],
      url: ['',],
    });

    this.formulario.patchValue({
      libroId: data.libro.libroId,
      titulo: data.libro.titulo,
      genero: data.libro.genero,
      anoPublicacion: data.libro.anoPublicacion,
      sinopsis: data.libro.sinopsis,
      autores: data.libro.autores,
      editorial: data.libro.editorial,
      url: data.libro.url,
    });

    console.log(data);
  }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.formulario.value);
  }

}
