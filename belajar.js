    // Deklarasi Variabel

    var myVariable = "This is a variable!";
    console.log(myVariable);

    // Menggunakan Variabel
    
    var number1 = 5;
    number1 = 3;
    console.log(number1); // 3
    window.alert(number1); // 3

    number1 = number1 + 5; // 3 + 5 = 8
    console.log(number1); // 8

    number1 = number1 - 6; // 8 - 6 = 2
    console.log(number1); // 2

    var number2 = number1 * 10; // 2 * 10 = 20
    console.log(number2); // 20

    var number3 = number2 / number1; // 20 / 2 = 10
    console.log(number3); // 10

    var myString = "I am a " + "string!!";
    console.log(myString);

    
    // Type Variabel
    
    var myInteger = 12; // 32-bit number
    var myLong = 9130141419482; // 64-bit number
    var myFloat = 5.5; // floating point number
    var myDouble = 9130141419482.22; // 64-bit floating number
    var myBoolean = true; // boolean
    var myBoolean2 = false;
    var myNotANumber = NaN;
    var NaN_Example = 0 / 0; // NaN
    var notDefined; // undefined
    var myNull = null;

    console.log(myInteger, myLong, myFloat, myDouble, myBoolean, myBoolean2, myNotANumber, NaN_Example, notDefined, myNull);

    
    // Arrays dan Objects
    
    var myArray = []; // empty array
    var favoriteFruits = ["apple", "orange", "strawberry"];
    var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
    var employees = ["Billy", "Bob", "Joe"];
    var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    var randomVariables = [2, "any type works", undefined, null, true, 2.51];
    myArray = ["zero", "one", "two"];

    console.log(myArray[0]); // "zero"
    console.log(employees[0]); // "Billy"

    var elementNumber = 1;
    console.log(employees[elementNumber]); // "Bob"

    var myObject = {};

    // Object dengan Property
   
    var john = { firstname: "John", lastname: "Doe", fullname: "John Doe" };
    var billy = { firstname: "Billy", lastname: undefined, fullname: "Billy" };

    console.log(john.fullname); // John Doe
    console.log(billy.firstname); // Billy
    alert("Apakah anda akan terus melanjutkan meskipun anda mengetahui bahwa ini tidak mudah?"); 
    confirm("Yakin masih mau  lanjut?");
    confirm("yakinnn???")
    prompt("Welcome to Pojok Wareg Crew")
    Date("19-10-2007")
    parseInt("FalsePhropet")
    setTimeout("FalsePhropet,1000")
    function foo() {
alert("YOOO WELCOMEE!!!");
} foo(); a

