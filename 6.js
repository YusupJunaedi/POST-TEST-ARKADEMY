function cetakFibonacci(number) {

    const result = [1, 1];
    for (var i = 2; i < number; i++) {
      result.push(result[i-2] + result[i-1]);
    }
    return result; 
  
  }
  
  console.log(cetakFibonacci(11)); 