 window.onload=function(){




document.getElementById('#go').addEventListener('click', questionOne);

function questionOne() {
  var one = document.getElementById('#start')
  console.log(one);
  one.innerHTML="<h1>What Operating system are you using?</h1><button>MacOS</button><br><button>Windows</button><br><button>Linux Based</button>"
};

};
