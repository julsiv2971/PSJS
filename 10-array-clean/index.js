const arr = [3, 6, 9, 2, 4.5, -1]


function checkGoodOrNot(el){
  return (el > 5)
};


function checkArr (arr, func){
  let newArray = []
  for (element of arr) {
    if(func(element)) {
      newArray.push(element)
    }
  }
  return newArray;


}

console.log(checkArr(arr, checkGoodOrNot))