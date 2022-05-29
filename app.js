

var car = new Object();

car.color = "Black";
car.brand = "Maruthi"; 
car.seats = "Four";
car.purpos = "own";                       
car.number=9765;
car["engineCondition"] = "Good";

car.owner = new Object();

car.owner.firstName = "Nikith";
car.owner.lastName="Chinna";
car.owner.color="RED";
car.owner.noOfvehicles=3;


console.log(car.color);
console.log(car.brand);
console.log(car.number);
console.log(car.seats);
console.log(car.purpos);
console.log(car.color," ,", car.brand," ," , car.number, " ," ,car["engineCondition"]);

console.log(car.owner.firstName,car.owner.lastName,car.owner.color,car.owner.noOfvehicles);

console.log(car["engineCondition"])

//


var bike = new Object();

bike.color = "Red";
bike.brand = "Ninza";
bike.cc = "1000 cc";
bike.fuel = "Desil";

console.log(bike.color);
console.log(bike.brand);
console.log(bike.cc);
console.log(bike.fuel);
console.log(bike.color,bike.brand,bike.cc,bike.fuel);

var house = new Object();

house.type = "2bhk";
house.size = "3000 sq feet";
house.cost = "1 crore";
house.location = "Banglore",

console.log(house.type);
console.log(house.size);
console.log(house.cost);
console.log(house.location);

console.log(house.type,house.size,house.cost,house.location);




