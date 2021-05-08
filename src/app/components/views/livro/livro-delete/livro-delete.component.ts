import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

  idCat: string = '';

  livro: Livro = {
    titulo: '',
    nome_autor: '',
    texto: ''
  }

  constructor(private service: LivroService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.idCat = this.route.snapshot.paramMap.get('idCat')!;
    this.livro.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.findById();
  }

  findById() {
    if (this.livro.id) {
      this.service.findById(this.livro.id.toString()).subscribe(livro =>{
        this.livro = livro;
      });
    }
  }

  cancel() {
    this.router.navigate([`categorias/${this.idCat}/livros`]);
  }

  delete() {
    this.service.delete(this.livro.id!).subscribe(() => {
      this.router.navigate([`categorias/${this.idCat}/livros`]);
      this.service.mensagem('Livro removido com sucesso!');
    }, err => {      
      this.router.navigate([`categorias/${this.idCat}/livros`]);
      this.service.mensagem('Erro ao remover livro!');
    })
  }
}
