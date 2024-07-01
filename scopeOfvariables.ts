let y = 20; //global var
function someFn(){
    if(true){
        //var x = 100;
        let x = 100;
        console.log(x); // local var
    }
    //console.log(x); //out side of if block
    

}
//console.log(x); //error //out side of if block
console.log(y);//ok