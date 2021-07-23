const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution herec

const reducer = (accumulator, currentValue) => accumulator + currentValue;

//const totalBatteries = batteryBatches.reduce(reducer, 0) //0 is the initial value

const totalBatteries = batteryBatches.reduce( (accumulator, currentValue ) => accumulator + currentValue)