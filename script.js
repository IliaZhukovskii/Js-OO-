'use strict';

class  First{
   hello(){
     console.log("Привет я метод родителя!");
   }
}

let newFirst = new First();

class Second extends First{
  hello(){
    newFirst.hello();
    console.log("А я наследуемый метод!");
  }
}

let newSecond = new Second();

newSecond.hello();
