const searchString = (string) => {
    const arrayString = string.split('')
    const data = arrayString.filter((value, index) => {
      return value === value[index]
    })
    return data[0].toString()
  }
  
  console.log(searchString('ABCA'))