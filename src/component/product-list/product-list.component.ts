import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { ProductService } from '../../app/service/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  constructor(
    private productService: ProductService) {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.products = data;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log("Completed data loading");
          }
        }
      )
  }
}
