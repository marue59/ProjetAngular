import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { ProductPageComponent } from '../product-page/product-page.component';

// import des Models
import Album from 'src/app/models/album.model';
import Film from 'src/app/models/film.model';

// import des Services
import { AlbumService } from 'src/app/services/album.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  /*
  // a ne pas reproduire mais peut dépanner car nous n'avons pas de services
  films = new ProductPageComponent().films;
  albums = new ProductPageComponent().albums;

  products = this.films.concat(this.albums);
*/

  //type soit films soit albums
  product!: Film | Album;

  constructor(
    private routeur: Router,
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private filmService: FilmService
  ) {}
  /*
  ngOnInit(): void {
    // je vais chercher this.route et un objet qui contient snapshot et paramMap...
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.products.find((product) => product.id == id);
    }
  }
*/
  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
  }

  private suscribeFilm(id: number): void {
    this.filmService.getFilm(id).subscribe((film: Film) => {
      this.product = film;
    });
  }

  private suscribeAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe((album: Album) => {
      this.product = album;
    });
  }

  private setSuscribe(type: string | null, id: string | null) {
    if (id && type === 'albums') {
      // rajouter le +id permet de caster la chaine de caractere en nombre
      this.suscribeAlbum(+id);
    } else if (id && type === 'films') {
      this.suscribeFilm(+id);
    } else if (!id || !type) {
      this.routeur.navigate(['/not-found']);
    }
  }
}
