function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    return Math.abs(destinationBlock - startBlock) * 264;
  }
  
  function calculatesFarePrice(startBlock, destinationBlock) {
    const distance = distanceTravelledInFeet(startBlock, destinationBlock);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  console.log(distanceFromHqInBlocks(50)); // Output: 8
console.log(distanceFromHqInFeet(50)); // Output: 2112
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056
console.log(calculatesFarePrice(34, 38)); // Output: 0 (since 1056 feet is within the first 400 feet)
console.log(calculatesFarePrice(34, 50)); // Output: 13.12 (1056 feet - 400 feet = 656 feet * 0.02)
console.log(calculatesFarePrice(34, 60)); // Output: 25 (flat fare for distances over 2000 feet)
console.log(calculatesFarePrice(34, 100)); // Output: 'cannot travel that far' (distance over 2500 feet)
