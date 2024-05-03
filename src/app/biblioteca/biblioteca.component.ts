import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarLibroDialogComponent } from '../editar-libro-dialog/editar-libro-dialog.component';
import { InsertarLibroDialogComponent } from '../insertar-libro-dialog/insertar-libro-dialog.component';
import { InsertarAutorDialogComponent } from '../insertar-autor-dialog/insertar-autor-dialog.component';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css'],
})
export class BibliotecaComponent implements OnInit {
  libros: any[] = [
    {libroId: 1, titulo: 'Baldor', genero: 'Matemáticas', publicacion: '2000', autores: ['Baldor'], editorial: 'Patria', url: 'https://libreriapensar.com/wp-content/uploads/2020/04/biblioteca-matematica-baldor-3-tomos-baldor-cultura-.jpg'},
    {libroId: 2, titulo: 'El mundo de sofía', genero: 'Filosofía', publicacion: '1989', autores: ['Joseint Garder'], editorial: 'Patria', url: ''},
    {libroId: 3, titulo: 'Psicología de The walking dead', genero: 'Psicología', publicacion: '2020', autores: ['Travis Langley'], editorial: 'B', url: 'https://m.media-amazon.com/images/I/91QSJs-T5gL._AC_UF1000,1000_QL80_.jpg'},
    {libroId: 4, titulo: 'El código Da Vinci', genero: 'Narrativa', publicacion: '2000', autores: ['Dan Brown'], editorial: 'U', url: ''},
    {libroId: 5, titulo: 'Anubis', genero: 'Mitología', publicacion: '2000', autores: ['David Montalvo', 'Deborah García Bello'], editorial: 'Patria', url: 'https://dam.elcorteingles.es/producto/www-9788418748776-00.jpg?impolicy=Fill&width=640&height=640'},
    {libroId: 6, titulo: 'It', genero: 'Terror', publicacion: '2000', autores: ['stephen E. King'], editorial: 'Debolsillo', url: 'https://m.media-amazon.com/images/I/71NaD6ZH4ZL._AC_UF1000,1000_QL80_.jpg'}
  ];

  filtros: any = [
    {nombre: 'Género', lista: ['Terror', 'Historia']},
    {nombre: 'Autor', lista: ['stephen E. King']},
    {nombre: 'Editorial', lista: ['Patria', 'Debolsillo']}
  ];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialogEditar(data: any){
    let dialogRef =  this.dialog.open(EditarLibroDialogComponent, {width: '85%', height: '85%', data});

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }


  openDialogInsertar(data: any){
    let dialogRef =  this.dialog.open(InsertarLibroDialogComponent, {width: '85%', height: '85%', data});

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  openDialogInsertarAutor(data: any){
    let dialogRef =  this.dialog.open(InsertarAutorDialogComponent, {width: '85%', height: '85%', data});

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  logout(){
    localStorage.removeItem('user');
    console.log('Logout');
  }



}
