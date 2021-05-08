import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaUpdateComponent
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'categorias/:idCat/livros',
    component: LivroReadAllComponent
  },
  {
    path: 'categorias/:idCat/livros/update',
    component: LivroUpdateComponent
  },
  {
    path: 'categorias/:idCat/livros/update/:id',
    component: LivroUpdateComponent
  },
  {
    path: 'categorias/:idCat/livros/delete/:id',
    component: LivroDeleteComponent
  },
  {
    path: 'categorias/:idCat/livros/read/:id',
    component: LivroReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
