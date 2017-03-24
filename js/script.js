 window.onload=function(){
var tally = {

 myob: 0,
 xero:  0,
 reckon: 0,
 quickbooks: 0
};

//Start
document.getElementById('go').addEventListener('click', function(){
questionOne();
});

//What Operating system
document.getElementById('macos').addEventListener('click',function(){
  addXero();
  questionThree();
});
document.getElementById('windows').addEventListener('click',function(){
  questionThree();
  addXero();
});
document.getElementById('linux').addEventListener('click', function(){
  questionThree();
});

//How big
document.getElementById('large').addEventListener('click', function(){
  addXero();
  questionFour();
});
document.getElementById('medium').addEventListener('click', function(){
  addXero();
  questionFour();
});
document.getElementById('small').addEventListener('click', function(){
  addXero();
  questionFour();
});

//Budget
document.getElementById('low').addEventListener('click', function(){
  addXero();
  addQuickbooks();
  questionFive();
});
document.getElementById('average').addEventListener('click', function(){
  addXero();
  questionFive();
});
document.getElementById('high').addEventListener('click', function(){
  addMyob();
  questionFive();
});

//payroll
document.getElementById('payyes').addEventListener('click', function(){
  addXero();
  addMyob();
  questionSix();
});
document.getElementById('payno').addEventListener('click', function(){
  addXero();
  addQuickbooks();
  questionSix();
});

//invoicing
document.getElementById('invyes').addEventListener('click', function(){
  addXero();
  addMyob();
  questionSeven();
});
document.getElementById('invno').addEventListener('click', function(){
  addXero();
  addQuickbooks();
  questionSeven();
});

//banking
document.getElementById('bankyes').addEventListener('click', function(){
  addXero();
  addMyob();
  questionEight();
});
document.getElementById('bankno').addEventListener('click', function(){
  addXero();
  addQuickbooks();
  questionEight();
});

//how many invoices per month
document.getElementById('lessthan30').addEventListener('click', function(){
  addXero();
  addMyob();
  sort();
});
document.getElementById('lessthan100').addEventListener('click', function(){
  addXero();
  addQuickbooks();
  sort();
});
document.getElementById('morethan100').addEventListener('click', function(){
  addXero();
  addQuickbooks();
  sort();
});



//Add Functions
function addXero(){
  tally.xero ++;
};
function addReckon(){
  tally.reckon++;
};
function addQuickbooks(){
  tally.quickbooks++;
};
function addMyob(){
  tally.myob++;
};

//Questions
function questionOne() {
  var one = document.getElementById('start')
  one.classList.add('hide');
  var two = document.getElementById('os')
  two.classList.remove('hide')
  console.log(tally);
};

function questionThree() {
  var i = document.getElementById('os')
  i.classList.add('hide');
  var x = document.getElementById('howbig')
  x.classList.remove('hide')
  console.log(tally)
};

function questionFour(){
  var i = document.getElementById('howbig')
  i.classList.add('hide');
  var x = document.getElementById('budget')
  x.classList.remove('hide')
  console.log(tally);
};

function questionFive(){
  var i = document.getElementById('budget')
  i.classList.add('hide');
  var x = document.getElementById('payroll')
  x.classList.remove('hide')
  console.log(tally);
};

function questionSix(){
  var i = document.getElementById('payroll')
  i.classList.add('hide');
  var x = document.getElementById('invoice')
  x.classList.remove('hide')
  console.log(tally);
};

function questionSeven(){
  var i = document.getElementById('invoice')
  i.classList.add('hide');
  var x = document.getElementById('bank')
  x.classList.remove('hide')
  console.log(tally);
};

function questionEight(){
  var i = document.getElementById('bank')
  i.classList.add('hide');
  var x = document.getElementById('howmanyinvoice')
  x.classList.remove('hide')
  console.log(tally);
};

//Routing Code
function sort(){
if (tally.xero > tally.reckon && tally.xero > tally.myob && tally.xero >tally.quickbooks){
  openXero();
}
else if (tally.quickbooks > tally.xero && tally.quickbooks > tally.reckon && tally.quickbooks > tally.myob){
  openQuickbooks();
}
else if (tally.reckon > tally.xero && tally.reckon > tally.quickbooks && tally.reckon > tally.myob){
  openReckon();
}
else {
  openMyob();
}
};

function openXero(){
  var url = "xero.html";
  window.open(url, '_top');
  }

/*
function openQuickbooks(){
  var i = document.getElementById('howmanyinvoice')
  i.classList.add('hide');
  var x = document.getElementById('xerolanding')
  x.classList.remove('hide')
}

function openReckon(){
  var i = document.getElementById('howmanyinvoice')
  i.classList.add('hide');
  var x = document.getElementById('')
  x.classList.remove('hide')
}

function openMyob(){
  var i = document.getElementById('howmanyinvoice')
  i.classList.add('hide');
  var x = document.getElementById('')
  x.classList.remove('hide')
}*/
}; //End of onload function
