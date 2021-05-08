import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: 0,
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
    this.service.findById(this.route.snapshot.paramMap.get('id')!).subscribe(categoria =>{
      this.categoria.id = categoria.id;
      this.categoria.nome = categoria.nome;
      this.categoria.descricao = categoria.descricao;
    });
  }

  eliminar() {
    this.service.delete(this.categoria.id!).subscribe(resposta => {
      this.router.navigate(['categorias']);
      this.service.mensagem('Categoria eliminada com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error);
    });
  }

}
