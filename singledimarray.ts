//****  1D Array declaration and initialization */

var fruits1:string[] = ["Apple","Manago","Orange"];

//or

var fruits2:Array<string>;
fruits2 = ["Apple","Manago","Orange"];

console.log(fruits1);
console.log(fruits2);

//***Multi type array */

var values : (string|number) []= ["Apple",10,"Mango",20];
console.log(values);

//or
var values : Array<string | number> =["Banana",10,"Mango",200];
console.log(values);

//***Acces Array elements */

var cars:string[]=["Audi","Bmw","Benz"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

//***  for loop */

console.log("Reading elements using for loop......");

for(var i=0;i<cars.length;i++){
console.log(cars[i]);
}

console.log("Reading elements using for loop with in operator......");
for(var j in cars){
    console.log(cars[j]);
    
}





