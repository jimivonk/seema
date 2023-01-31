'use strict';


//create function that:
//-takes Regular expression
//-compares it with the class/input
//-returns error message when criteria not met
//-red border round incomplete box/es
//-thank you pop-up if all is OK
//higher order function will have 3 arguements(reg, inp)

//create function for each criteria
//click function for each
//ID name === function call to check



let name, email, number, address, city, postcode

//NAME Min 2 sets of letters seperated by a space
const nameReg = new RegExp(/^[A-Za-z]+( [A-Za-z]+){1,}$/, );
//EMAIL @ and .
const emailReg = new RegExp(/[A-Za-z0-9]+(@)([A-Za-z]+)(\.)([A-Za-z]+)/);
//NUMBER min 9 numbers -- optional add arre code drop down
const numberReg = new RegExp(/^\d{9,14}$/);
//ADDRESS min characters
const addressReg = RegExp(/^[A-Za-z0-9#\.\/\s]+$/);
// CITY min characters (no numbers)
const cityReg = RegExp(/^[A-Za-z]+$/);
// POSTCODE letter + 1/2 nums " " Num + 2 letters {1, 2} at least 1 time at most 2 times
const postcodeReg = RegExp(/^[A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2}$/i);


//test function
const testReg = function(reg, inp) {
    const val = inp.toLowerCase();
    console.log("val = ", val);
    // return reg.test(val);
    console.log(`${inp} is ${reg.test(inp)}`);

}
//function to clear whitespace and convert all to lower
//function to loop over inputs and return(on page) appropriate error message/s
// function to store correct data in object

testReg(nameReg, "Jane Doe");
testReg(emailReg, 'jimi@email.com');
testReg(numberReg, '0044777888777');
testReg(addressReg,"12 Baker Road")
testReg(postcodeReg, "L7 1UW")
// console.log(/^[A-Z][a-z]+( [A-Z][a-z]+){1,}$/.test("James Keilt"))
// console.log(nameReg.test("Foo Fighters"));
//WRONG
// console.log(/^[a-z]{2, } (\s[a-z]+)$/.test("foo fighters"));
//RIGHT
// console.log(/^[A-Z][a-z]+( [A-Z][a-z]+){1,}$/.test("Foo Fighters"));