const count_handshake = (number) => {
    let arr = [];
    for(let i = 0; i < number; i++){
       arr.push(i)
    }
    // console.log(arr)
   const count = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
   return count
}

console.log(count_handshake(6))