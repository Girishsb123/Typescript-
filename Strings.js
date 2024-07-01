var mystring1 = "Welcome";
var mystring = "Welcome to typescript";
//charAt()
console.log(mystring.charAt(0));
console.log(mystring.charAt(2));
//concat
var str1 = " Welcome ";
var str2 = " to typescript";
var str3 = " and protractor";
console.log(str1.concat(str2).concat(str3));
//replace()
var str = "Typescript Programming";
console.log(str.replace('i', 'X'));
console.log(str.replace('Type', 'Java'));
//Split()
var fruits = "Apple Banna Orange";
console.log(fruits.split(' '));
console.log(fruits.split(' ', 2));
console.log(fruits.split(' ', 1));
//substring()
str = "Welcome";
console.log(str.substring(0, 3)); // Wel
console.log(str.substring(2, 5)); // lco
//toUppercase && toLowercase
str = "Typescript Programming";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//trim()
str = "   welocme    ";
console.log(str.trim());
