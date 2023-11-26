import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, takeWhile } from "rxjs";
import {Product} from "../Models/Product";
import {ProductsService} from "../products.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  private currentPage = 1;
  private hasMoreProducts = true;

  products$: Observable<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadMoreProducts();
  }

  loadMoreProducts(): void {
    if (!this.hasMoreProducts) {
      return;
    }

    this.productsService.getProducts(this.currentPage).subscribe(response => {
      const currentProducts = (this.products$ as BehaviorSubject<Product[]>).getValue();
      const newProducts = response.products;

      if (newProducts.length > 0) {
        this.currentPage++;
        (this.products$ as BehaviorSubject<Product[]>).next([...currentProducts, ...newProducts]);
      } else {
        this.hasMoreProducts = false;
      }
    });
  }

}
