



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


