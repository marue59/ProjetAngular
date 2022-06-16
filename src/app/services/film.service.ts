import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Film from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  // CRUD
  // On creer une methode pour recuperer les films
  // La methode doit retourner un observable qui sera un tableau de films
  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${this.apiUrl}/films`);
    // ou en plus simple
    // return this.httpClient.get<Film>(this.apiUrl + '/film');
  }

  getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`${this.apiUrl}/films/${id}`);
  }

  createFilm(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(`${this.apiUrl}/films`, film);
  }

  updateFilm(film: Film): Observable<Film> {
    return this.httpClient.put<Film>(`${this.apiUrl}/films/${film.id}`, film);
  }

  deleteFilm(id: number): Observable<Film> {
    return this.httpClient.delete<Film>(`${this.apiUrl}/films/${id}`);
  }
}
