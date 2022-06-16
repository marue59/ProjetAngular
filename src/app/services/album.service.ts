import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Album from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  // CRUD
  // On creer une methode pour recuperer les films
  // La methode doit retourner un observable qui sera un tableau de films
  getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.apiUrl}/albums`);
    // ou en plus simple
    // return this.httpClient.get<Film>(this.apiUrl + '/film');
  }

  getAlbum(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.httpClient.post<Album>(`${this.apiUrl}/albums`, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.httpClient.put<Album>(
      `${this.apiUrl}/albums/${album.id}`,
      album
    );
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.httpClient.delete<Album>(`${this.apiUrl}/albums/${id}`);
  }
}
