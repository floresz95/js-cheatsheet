// függvényeknek 3 féle scope-ja van, ami a láthatóságát determinálja: Block, Function, Global Scope

//Block scope: azok a változók, amiket a {}-en belül adtak meg, nem hozzáférhetőek a blokkon kívülről ezek a változók Local scope-ban lesznem tárolva
/* {
    let x = 2;
} //x nem használható kint */

//Function scope: Azok a változók, amik a függványen belül lettek megadva, kívülről nem érhetőek el 
/* function myFunction() {
  let carName = "Volvo";   // Function Scope
} */

//Global scope: azok a változók, amik a függvényen kívül lettek megadva, azokat bárhonnan el lehet érni, globálisak
/* let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName 
} */
