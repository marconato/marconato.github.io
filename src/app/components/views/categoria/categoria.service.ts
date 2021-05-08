import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private endpoint: string = `${environment.baseUrl}/categorias`;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.endpoint);
  }

  findById(id: string): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.endpoint}/${id}`);
  }

  delete(id: number):Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }

  update(categoria: Categoria): Observable<Categoria> {
    if (categoria.id) {
      return this.http.put<Categoria>(`${this.endpoint}/${categoria.id}`, categoria);
    }
    else 
    {
      return this.http.post<Categoria>(this.endpoint, categoria);
    }
  }

  mensagem(text: string): void {
    this._snack.open(`${text}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
