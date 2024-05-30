import { Component, OnInit } from '@angular/core';
import { IProduct } from '../ShoppingKart-Interfaces/product';
import { ICategory } from '../ShoppingKart-Interfaces/category';
import { ProductService } from '../shoppingKart-services/product-service/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products!: IProduct[];
  categories!: ICategory[];
  filterProduct!: IProduct[];
  searchByProductName!: string;
  searchByCategoryId: string = "0";
  imageSrc!: string;
  showMsgDiv: boolean = false;
  constructor(private _productService: ProductService) {

  }
  ngOnInit() {
   

    this.getProducts();
    //this.getProductCategories();
    if (this.products == null) {
      this.showMsgDiv = true;
    }
    this.filterProduct = this.products;
    this.imageSrc = "src\assets\ImageSrc\add-item.jpg";
  }
  getProducts() {
    this._productService.getProducts().subscribe(
      responseProductData => {
        this.products = responseProductData;
        this.filterProduct = responseProductData;
        this.showMsgDiv = false;
      }
    );
  }
     serachProductByCateogry(catagoryId: string)
    {

      if (catagoryId == "0") {

        this.filterProduct = this.products;
      }
      else {
        this.filterProduct = this.filterProduct?.filter(p => p.categoryId.toString() == catagoryId);

      }
    }

  }


