function fibonacci(n){
    const fib=[0,1];

    for(let i=0;i<fib.length;i++){
        fib[i]= fib[i-1] + fib[i-2];


    }

    return fib;
}

console.log(fibonacci(2));


//No to generate the fibonacci series one can use below code 


var fibGenerator = function*() {

    let n1=0, n2=1;

    while(true) {        
        yield n1;
        [n1,n2] = [n2,n1+n2];

    }

};

const gen= fibGenerator();

gen.next().value;
