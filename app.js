class CustomMatch {
    constructor(number){
      this.number = number;
    }
    plus (a){
      return this.number+a;
    }
    minus(b){
      return this-b;
    }
  
}
 


var result = new CustomMatch(50).plus(30).
console.log(result);