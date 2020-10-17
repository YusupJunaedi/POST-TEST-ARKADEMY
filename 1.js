const alphSort = (data) => {
  let end = false;

  while (!end) {
    end = true;
    for (let i = 1; i < data.length; i++) {
      if (data[i - 1] > data[i]) {
        end = false;
        const tmp = data[i - 1];
        data[i - 1] = data[i];
        data[i] = tmp;
      }
    }
  }
  return data;
};

console.log(alphSort(["z", "d", "a", "b"]));