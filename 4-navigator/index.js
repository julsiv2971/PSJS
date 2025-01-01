function findLong(addLat, addLong, positionLat,positionLong) {
    return Math.sqrt((addLat - positionLat)**2 + (addLong - positionLong)**2)

}

console.log(findLong(10,20,30,40))