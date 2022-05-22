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
