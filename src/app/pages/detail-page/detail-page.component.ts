import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  // a ne pas reproduire mais peut dépanner car nous n'avons pas de services
  films = new ProductPageComponent().films;
  albums = new ProductPageComponent().albums;

  products = this.films.concat(this.albums);

  product!: any;

  constructor(private routeur: RouterOutlet, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // je vais chercher this.route et un objet qui contient snapshot et paramMap...
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.products.find((product) => product.id == id);
    }
  }
}
