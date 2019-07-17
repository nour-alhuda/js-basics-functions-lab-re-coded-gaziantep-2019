// Code your solution in this file!
function distanceFromHqInBlocks(distanceInBlocks){
    return Math.abs(distanceInBlocks - 42);
  }
  
function distanceFromHqInFeet(distanceInBlocks){
  return distanceFromHqInBlocks(distanceInBlocks) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock){
  return Math.abs(startingBlock - endingBlock) * 264;
}
function calculatesFarePrice(startingBlock, endingBlock){
  let distance = distanceTravelledInFeet(startingBlock, endingBlock) ;
  if (distance <= 400){
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return (distance - 400)*0.02;
  }
  else if (distance > 2000 && distance <= 2500){
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
  