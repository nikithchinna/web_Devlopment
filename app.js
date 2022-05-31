

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

//

a=0;
         b=3;
         d=3;
        d=a+b
        if(d){
            getFullname("Nikith","Chinna");;
        }
        else{
            addTwoNumbers(1,2)
        }
        function getFullname(firstname,lastname){
            
            var fullname=(firstname+" "+lastname);
            console.log(fullname);
        }
        function addTwoNumbers(a,b){
            var d=a+b;
            console.log(d);   
        }


        var a=0;
        if(false||true){
            console.log("Are you Free")
        }
        else {
            console.log("Iam Not Available")
        }


        var a=0;
        if(a||true){
            console.log("Are you Free")
        }
        else {
            console.log("Iam Not Available")
        }

        function greetings(name){
            console.log('hello',name)
        }
        greetings('Nikith');


        function greeting(){
            return 'hello Chinna'
        }
        let message=greeting();
        console.log(message);


        function add(){
            var adding=3+7;
            return adding;
        }
        let adding=add();
        console.log(adding)


        function twoNumbers(t,y){
            var result=t+y
            return result
        }
        let Nikith=twoNumbers(5,3);
        console.log(Nikith);


        function sum(num1,num2){
            return num1+num2
        }
        let result=sum(2,5);
        console.log(result);


        function rrr(){
            console.log("hello"+" "+name)
        }
        let name= "Friend"
        rrr(name);
        name="Nikith"
        rrr(name);


