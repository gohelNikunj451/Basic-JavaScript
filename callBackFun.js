// call back function is function which can call other function in argument 

function product(a,b){
    return a*b;
}

function sum(x,y){
    console.log(x+y);
}

sum(product(5,5),10);
