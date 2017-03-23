 window.onload=function(){

var xero = 0;
var reckon = 0;
var quickbooks = 0;


document.getElementById('#go').addEventListener('click', function(){
questionOne();
});
document.getElementById('#macos').addEventListener('click',function(){
  addXero();
  questionThree();
});
document.getElementById('#windows').addEventListener('click',function(){
  questionThree();
  addXero();
});
document.getElementById('#linux').addEventListener('click', function(){
  questionThree();
});
document.getElementById('#large').addEventListener('click', function(){
  questionFour();
  addXero();
});



function addXero(){
  xero ++;

};
function addReckon(){
  reckon++;
};
function addQuickbooks(){
  quickbooks++;
};
function questionOne() {
  var one = document.getElementById('#start')
  console.log(one);
  one.classList.add('hide');
  var two = document.getElementById('#os')
  two.classList.remove('hide')
};

function questionThree() {
  var i = document.getElementById('#os')
  i.classList.add('hide');
  var x = document.getElementById('#howbig')
  x.classList.remove('hide')
  console.log(xero,quickbooks,reckon)
};

function questionFour(){
  var i = document.getElementById('#howbig')
  i.classList.add('hide');
  var x = document.getElementById('#budget')
  x.classList.remove('hide')
  console.log(xero,quickbooks,reckon);
};


}; //End of onload function
