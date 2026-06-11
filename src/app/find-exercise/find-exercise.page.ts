import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-exercise',
  templateUrl: './find-exercise.page.html',
  styleUrls: ['./find-exercise.page.scss'],
  standalone: false
})
export class FindExercisePage implements OnInit {

  ResultList : {Id : number , Name : string, Address : string ,  Gender :string, ProfileImageURL:string}[] = []

  constructor() {}


   filterGender(gender : string){

    this.ResultList = this.UserList.filter(x=>x.Gender == gender)
   }

  UserList = [
  {
    Id : 1, 
    Name : "Alvin",
    Address: "1212",
    Gender : "Male",
    ProfileImageURL: ""
  },
    {
    Id : 2, 
    Name : "Terence",
    Address: "1221",
    Gender : "Male",
    ProfileImageURL: ""
  },
    {
    Id : 3, 
    Name : "Mengwai",
    Address: "121",
    Gender : "Male",
    ProfileImageURL: ""
  },
    {
    Id : 4, 
    Name : "Xin",
    Address: "Sqwofinwoin",
    Gender : "Female",
    ProfileImageURL: ""
  },
    {
    Id : 5, 
    Name : "Lucas",
    Address: "tesint address",
    Gender : "Male",
    ProfileImageURL: ""
  },

]



User = {
    Id : 0, 
    Name : "",
    Address: "",
    Gender : "",
    ProfileImageURL: ""
  };

SearchUser(id:number){

  
  var myUser = this.UserList.find(x=>x.Id == id)
  if(myUser == null)
    return;

  this.User.Id = myUser.Id
  this.User.Name = myUser.Name
  this.User.Address = myUser.Address
  this.User.Gender = myUser.Gender
  this.User.ProfileImageURL = myUser.ProfileImageURL

}
  ngOnInit() {
  }

}
