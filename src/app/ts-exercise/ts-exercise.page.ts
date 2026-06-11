import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-exercise',
  templateUrl: './ts-exercise.page.html',
  styleUrls: ['./ts-exercise.page.scss'],
  standalone: false
})
export class TsExercisePage implements OnInit {

  name : string = "testing name";
  age : number = 20;
  isLogin : boolean = true;

  sayHello(){
    alert("Say Hello world")
  }

  SayHelloWithMessage(msg : string){

    alert(msg)
  }

  student = {
    id : 1 ,
    name : "kevin",
    age : 20
  }

  studentList = [
  {
    id : 1 ,
    name : "kevin",
    age : 20
  },
  {
    id : 2 ,
    name : "Terence",
    age : 20
  },
  {
    id : 3 ,
    name : "Mengwai",
    age : 20
  },
  {
    id : 4 ,
    name : "Xin",
    age : 20
  }]

  showStudent(){
    alert(this.student.name)
  }


  InputName : string = "";
  totalStudent : number = this.studentList.length;
  addStudent(){
    this.studentList.push({id: 0 , name: this.InputName , age : 0})
  }
  Delete(id : number){
    this.studentList = this.studentList.filter(x=>x.id !== id)
  }

  getTotalStudent(){
    return this.studentList.length;
  }


  constructor() { //当我们的 page 打开时候 会自动走这个 method 一次  注明就只是一次
  }

  ngOnInit() {
  }

}
