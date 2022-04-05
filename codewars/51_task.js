// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if((mpg*fuelLeft)  == distanceToPump || (mpg*fuelLeft) > distanceToPump ) {
      return true
    } else {return false}// TODO

};