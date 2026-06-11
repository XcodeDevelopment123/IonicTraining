import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {

  baseUrl : string = "https://api.data.gov.my/weather/forecast"

  GetProductURL : string = "https://chintzekang-htc9a7f9eud7gzbu.eastasia-01.azurewebsites.net/api/ManageProduct/GetProductList"

  GetCartList : string = "https://chintzekang-htc9a7f9eud7gzbu.eastasia-01.azurewebsites.net/api/ManageProduct/GetCartList"

  AddToCartURL : string = "https://chintzekang-htc9a7f9eud7gzbu.eastasia-01.azurewebsites.net/api/ManageProduct/AddToCart"

  Login : string = "https://chintzekang-htc9a7f9eud7gzbu.eastasia-01.azurewebsites.net/api/Auth/Login"

  constructor(private http: HttpClient){}
  getProductList(){
    return this.http.get<any[]>(this.GetProductURL)
  }

  getCartList(){
    return this.http.get<any[]>(this.GetCartList)
  }

  addToCart(cart: any){
    return this.http.post(this.AddToCartURL , cart)
  }

  getUsers(){
    return this.http.get<any[]>(this.baseUrl);
  }

  userLogin(LoginParam : any){
    return this.http.post(this.Login , LoginParam)
  }

  
}
