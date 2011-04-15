var Utility = {
  hasClass: function(name, type) {
    var results = [];
    
    var re = new RegExp("(^|\\s)"+name+"(\\s|$)");
    var elems = document.getElementsByTagName((type || '*'));
    
    for (var i in elems) {
      if (re.test(elems[i].className)) {
        results.push(elems[i]);
      }
    }
    return results;
  }
}

function slideDown(elem) {
  elem.style.height = '0px';
  
  var h = 100;
  
  for (var i = 0; i <= 100; i += 5) {
    (function(){
      var pos = i;
      setTimeout(function(){
        elem.style.height = (pos/100)*h + 'px';
      }, (pos+1)*10 );
    })();
  }
}

var logo = document.getElementById('brandStartLogo');
slideDown(logo);



function fib(n) {
  return n <= 1 ? n : fib(n-1) + fib(n-2);
}

function fib(n) {
  if (n<=1) return n;

  var prev = 0;
  var cur = 1;
  for (var i = 1; i < n; i++) {
    var temp = prev;
    prev = cur;
    cur = cur + temp;
  }
  return cur;
}