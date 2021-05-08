import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private endpoint: string = `${environment.baseUrl}/livros`;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findaAllByCategoria(id: string): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.endpoint}?categoria=${id}`);
  }

  create(livro: Livro, idCat: string): Observable<Livro> {
    return this.http.post<Livro>(`${this.endpoint}?categoria=${idCat}`, livro);
  }

  update(livro: Livro, idCat: string): Observable<Livro> {
    if (livro.id) {
      return this.http.put<Livro>(`${this.endpoint}/${livro.id}`, livro);
    }
    else
    {
      return this.http.post<Livro>(`${this.endpoint}?categoria=${idCat}`, livro);
    }
  }

  findById(id: string): Observable<Livro>{
    return this.http.get<Livro>(`${this.endpoint}/${id}`);
  }

  delete(id: number):Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }

  mensagem(text: string): void {
    this._snack.open(`${text}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
