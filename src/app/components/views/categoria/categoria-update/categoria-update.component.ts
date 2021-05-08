import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.service.findById(this.route.snapshot.paramMap.get('id')!).subscribe(categoria =>{
        this.categoria.id = categoria.id;
        this.categoria.nome = categoria.nome;
        this.categoria.descricao = categoria.descricao;
      });
    }
  }

  update() {
    this.service.update(this.categoria).subscribe(resposta => {
      this.router.navigate(['categorias']);
      this.service.mensagem('Categoria salva com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error);
    });
  }

}
