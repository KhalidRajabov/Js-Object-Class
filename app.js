class Matchs{
   
  constructor(number)
{   
  this.number=number;


}
plus(num){
this.number=this. number+num;
return this
}
minus(num){
this.number=this. number-num;
return  this
}
multiple(num){
this.number=  this. number*num;
return this
}
divide(num){
 this.number=this. number/num;
 return this
} }
var result = new Matchs(50).plus(6).minus(30).multiple(3).divide(2)


console.log(result.number);



class Array {
  constructor(arr){
this.arr=arr

  }
  finds(value){
let check=false
for (let index = 0; index < this.arr.length; index++) {
    const element = this.arr[index];
    
    if (value==element) {
    check=true
    }
} 
return check
  }
  push1(value){

    this.arr[this.arr.length++]=value;
     return this.arr
}


}


let arr1=[1,2]
let newarr=new Array(arr1).push1(8)
let newarrs=new Array(arr1).finds(8)
console.log(newarrs);
console.log(newarr);