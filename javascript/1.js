var sum = function (a: number){
  var summ = a;
  
  function f(b: number){
    if(b){
      summ += b;
      return f;
    }
    else return summ;
  }
  
  return f;
}

console.log(sum(1)(2)(3)());
      
