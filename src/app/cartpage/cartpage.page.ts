import { Component, OnInit } from '@angular/core';
import { Api  } from '../services/api';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.page.html',
  styleUrls: ['./cartpage.page.scss'],
  standalone : false
})
export class CartpagePage implements OnInit {

  constructor(private api : Api ) { 
    this.GetProductList();
  }
    CartList : any [] = []
    GetProductList(){
      this.api.getCartList().subscribe(response => {
      this.CartList = response;
      console.log(this.CartList)
    })
  }

  ngOnInit() {
  }

}
