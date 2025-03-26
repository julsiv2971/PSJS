const date = ['10-02-2022', 'тест', '12/11/2023', '00/13/2022', '42/12/2023'];



function checkDate(arr) {
  const newArr = arr.filter ( el => {
        const arrPart = el.split(/[-\/]/);
        const [day, month, year] = arrPart;
        if (isNaN(day)|| isNaN(month) || isNaN(year)) return false
        if (day < 1 || day > 31) return false;
        if (month < 1 || month > 12) return false;
        if (year < 2000 || year > 2025) return false;
        return el
    }) 
    return newArr;
}

function updateDate (arr) {
  const newArr = checkDate(arr)
  .map( el => {
    const [day, month, year] = el.split(/[-\/]/);
    return [day,month,year].join("-");
  })
  return newArr
}

console.log(updateDate(date))


