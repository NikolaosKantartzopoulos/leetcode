var ParkingSystem = function (big, medium, small) {
  this.slots = {
    big,
    medium,
    small,
  };
};

ParkingSystem.prototype.addCar = function (carType) {
  if (carType == 1 && this.slots.big > 0) {
    this.slots.big -= 1;
    return true;
  } else if (carType == 2 && this.slots.medium > 0) {
    this.slots.medium -= 1;
    return true;
  } else if (carType == 3 && this.slots.small > 0) {
    this.slots.small -= 1;
    return true;
  }
  return false;
};
