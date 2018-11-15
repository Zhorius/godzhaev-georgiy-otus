var sum = function(a){
  console.log(a);
  if(this.summ === undefined) this.summ = 0;
  if (a === null || a === undefined){
    return this.summ;
  }

  else {
    this.summ += a;
    return sum;
  }

};

console.log(sum(1)(2)(3)());
      
