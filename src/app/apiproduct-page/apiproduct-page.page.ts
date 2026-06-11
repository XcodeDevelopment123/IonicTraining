import { Component, OnInit } from '@angular/core';
import { Api  } from '../services/api';
import { Router } from '@angular/router'


@Component({
  selector: 'app-apiproduct-page',
  templateUrl: './apiproduct-page.page.html',
  styleUrls: ['./apiproduct-page.page.scss'],
  standalone :false
})
export class APIProductPagePage implements OnInit {

  GetProductList(){
      this.api.getProductList().subscribe(response => {
      this.ProductList = response;
      console.log(this.ProductList)
    })
  }
  
  cartItem : {
    cartId : number ,  
    productName: string ,
    price :number ,
    quantity: number , 
    backgroundColor : string, 
    description:string , 
    ingredientList :string , 
    image:string } = <any>{};

  AddtoCart(id : number){

    var findProduct = this.ProductList.find(x=>x.id == id)
  
    this.cartItem.cartId = 0;
    this.cartItem.productName = findProduct.name;
    this.cartItem.price = findProduct.price;
    this.cartItem.quantity = 1;
    this.cartItem.backgroundColor = findProduct.backgroundColor;
    this.cartItem.description = findProduct.description;
    this.cartItem.ingredientList = findProduct.ingredientList;
    this.cartItem.image = findProduct.image;

    console.log(this.cartItem)

    this.api.addToCart(this.cartItem).subscribe({
      next: (response) => {
        console.log("added successfully",response)
      },
      error : (error) => {
        console.error("error adding to cart" , error);
      }
    })
  }

  ProductList : any [] = []


   LinkToCart(){
    this.router.navigate(['/cartpage']);
  }


  constructor(private api : Api , private router : Router) {
    this.GetProductList();
   }

  ngOnInit() {
  }

}
