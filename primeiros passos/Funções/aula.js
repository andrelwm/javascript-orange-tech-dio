function fibonacci(num){
    
    if (num <= 2){
        return num = 1
    } else {
        return fibonacci(num-1) + fibonacci(num-2)
    }
    
}

(function () {
    fib = fibonacci(3);
    console.log(fib)
})();