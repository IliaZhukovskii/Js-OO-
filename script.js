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
    background-color:` + this.bg + `;
    font-size:` + this.fontSize + `px;
    position: absolute;`;
    div.innerHTML = '';
    document.body.append(div);
  } else if (ferstSymbol == "#"){
    let p = document.createElement('p');
    p.id = nextSymbol;
    p.style.cssText = 
    `height:` + this.height + `px;
    width:` + this.width + `px;
    background-color:` + this.bg + `;
    font-size:` + this.fontSize + `px;
    position: absolute;`;
    p.innerHTML = this.selector;
    document.body.append(p);
  } else{
    alert("Вы ввели не selector");
  }
};

let str = prompt("Введите selector", ".example");

//Создание объекта через конструктор
let person = new DomElement(str, '100', '100', 'yellow', '20');

//Вызов метода
person.createElement();



let sq = document.querySelector('div');
document.addEventListener('keydown', function(event){

  if (event.code == 'ArrowRight'){
    sq.style.right = parseFloat(sq.style.right || 0) - 10 + 'px';
  }
  if (event.code == 'ArrowLeft'){
    sq.style.left = parseFloat(sq.style.left || 0) - 10 + 'px';
  }
  if (event.code == 'ArrowUp'){
    sq.style.top = parseFloat(sq.style.top || 0) - 10 + 'px';
  }
  if (event.code == 'ArrowDown'){
    sq.style.bottom = parseFloat(sq.style.bottom || 0) - 10 + 'px';
  }
});


