'use strict';
//Функция конструктор
let DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

//Метод конструктора
DomElement.prototype.createElement = function () {
  let ferstSymbol = this.selector[0];
  let nextSymbol = this.selector.substring(1);

  if (ferstSymbol == ".") {
    let div = document.createElement('div');
    div.classList.add = nextSymbol;
    div.style.cssText = 
    `height:` + this.height + `px;
    width:` + this.width + `px;
    margin: auto;
    margin-top: 10%;
    background-color:` + this.bg + `;
    font-size:` + this.fontSize + `px;`;
    div.innerHTML = this.selector;
    document.body.append(div);
  } else if (ferstSymbol == "#"){
    let p = document.createElement('p');
    p.id = nextSymbol;
    p.style.cssText = 
    `height:` + this.height + `px;
    width:` + this.width + `px;
    background-color:` + this.bg + `;
    font-size:` + this.fontSize + `px;
    margin: auto;
    margin-top: 10%;`;
    p.innerHTML = this.selector;
    document.body.append(p);
  } else{
    alert("Вы ввели не selector");
  }
};

let str = prompt("Введите selector", ".example");

//Создание объекта через конструктор
let person = new DomElement(str, '300', '300', 'yellow', '50');

//Вызов метода
person.createElement();

