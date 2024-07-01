//*** 2D array declaration and initialization */
var myarray = [[10, 20], [30.40], [50, 60]]; //using square brackets
console.log(myarray);
//** 2D Multi type array */
var myarray2 = [[10, "abc"], ["xyz", 20], [30, 40]];
console.log(myarray2);
//Access 2D array elements
console.log(myarray2[0][0]);
console.log(myarray2[0][1]);
//**loop to access array elements */
// console.log("Reading data from array using for loop....");
// for(var i=0;i<myarray2.length;i++){
//     for(var j=0;j<myarray2[i].length;j++)
//     {
//         console.log(myarray2[i][j]);
//     }
// }
console.log("Reading data from array using for loop with in operator....");
for (var i in myarray2) { //0 row
    for (var j in myarray2[i]) // 
     {
        console.log(myarray2[i][j]);
    }
}
