import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstCalc';

  num: number = null 
  numberOne: number = 0
  action: string = ""

  add(){
    this.numberOne = this.num
    this.num = null
    this.action = "+"
  }

  minus(){
    this.numberOne = this.num
    this.num = null
    this.action = "-"
  }

  divided(){
    this.numberOne = this.num
    this.num = null
    this.action = "/"
  }

  multiply(){
    this.numberOne = this.num
    this.num = null
    this.action = "*"
  }

  delete(){
    this.num = null
    this.numberOne = null
    this.action = ""
  }

  equal(){
    switch(this.action){
      case "+":this.num += this.numberOne;break;
      case "-":this.num = this.numberOne - this.num;break;
      case "*":this.num *= this.numberOne;break;
      case "/":this.num = this.numberOne/this.num;break;
    }

  }

  buttonPress(event: any){
    switch(event){
      case 107:this.add();break;
      case 109:this.minus();break;
      case 106:this.multiply();break;
      case 111:this.divided();break;
      case 13:this.equal();break;
    }
  }

}
