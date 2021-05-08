import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  idCat: string = '';

  titulo = new FormControl('', [Validators.minLength(3)]);
  nome_autor = new FormControl('', [Validators.minLength(3)]);
  texto = new FormControl('', [Validators.minLength(10)]);

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

  update() {
    this.service.update(this.livro, this.idCat).subscribe(categoria => {
        this.router.navigate([`categorias/${this.idCat}/livros`]);
        this.service.mensagem('Livro salvo com sucesso');
    }, err => {
      this.service.mensagem('Erro ao salvar o livro');
    });
  }

  validateForm(): boolean {
    return this.titulo.invalid || this.nome_autor.invalid || this.texto.invalid;
  }

  cancel() {
    this.router.navigate([`categorias/${this.idCat}/livros`]);
  }

}
