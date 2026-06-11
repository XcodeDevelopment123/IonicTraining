import { Component, OnInit } from '@angular/core';
import { Api  } from '../services/api';
import { Router } from '@angular/router'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
  standalone :false
})
export class LoginpagePage implements OnInit {

  LoginParam :{username : string , password: string} = <any>{}


  Username :any;
  Password :any;

  Login(){
    this.LoginParam.username = this.Username
    this.LoginParam.password = this.Password
    //alert(this.Username)
    this.api.userLogin(this.LoginParam).subscribe(
      {
      next: (response) => {
        console.log(response)

        // proceed router....
        // and keep the response data
        alert(response)

      },
      error : (error) => {
        console.error("Unable to login" , error);
      }
    }
    )

  }


  constructor(private api : Api , private router : Router) 
  {


  }

  ngOnInit() {
  }

}
