class Matchs {
  constructor(number) {
    this.number = number;
  }
  plus(num) {
    this.number = this.number + num;
    return this;
  }
  minus(num) {
    this.number = this.number - num;
    return this;
  }
  multiple(num) {
    this.number = this.number * num;
    return this;
  }
  divide(num) {
    this.number = this.number / num;
    return this;
  }
}
var result = new Matchs(50).plus(6).minus(30).multiple(3).divide(2);

console.log(result.number);

class Array {
  constructor(arr) {
    this.arr = arr;
  }


  findArr(thing) {
    let check = false;
    for (let index = 0; index < this.arr.length; index++) {
      const element = this.arr[index];

      if (thing == element) {
        check = true;
      }
    }
    return check;
  }
  pushArr(thing) {
    this.arr[this.arr.length++] = thing;
    return this.arr;
  }
}



let array = [1, 2,34,5,6, "a"];
let finder = new Array(array).findArr("a");
let pusher = new Array(array).pushArr("new item");
console.log(finder);
console.log(pusher);