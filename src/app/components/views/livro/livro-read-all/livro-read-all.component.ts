import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];

  public livros: Livro[] = [];

  constructor(private service: LivroService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    let idCat = this.route.snapshot.paramMap.get('idCat');
    this.service.findaAllByCategoria(idCat!).subscribe(livros => {
      this.livros = livros;
    });
  }

}
