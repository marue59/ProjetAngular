import { Component, OnInit } from '@angular/core';

// import des Models
import Album from 'src/app/models/album.model';
import Film from 'src/app/models/film.model';

// import des Services
import { AlbumService } from 'src/app/services/album.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  films: Film[] = [];
  albums: Album[] = [];

  constructor(
    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    // recuperer la liste de tout les films
    // utiliser l'observable qui est un objet et qui du coup a des methodes
    // faire fonction anonyme
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;
    });
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
}
