const arr = [1, 40, -5, 10, 0];


function getSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          let value = arr[i];
          arr[i] = arr[j];
          arr[j] = value;
        };
      };
    };
    return arr;
  };
  console.log(getSort(arr))
