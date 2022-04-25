/* 
const, let és var szavakkal hozunk létre változókat

az egyenlőség jel bal oldalán szerepel a változó neve és a jobb oldalán az ehhez tartozó érték

a primitívek a következők: string(szövegek), integer(számok), boolean(true or false), undefined, null 
*/

let aString = "This is a string"; //mindig idézőjelbe rakjuk a stringet, back tick `` can make multiline comment

let aNumber = 9; //nem szabad idézőjelbe rakni a számot

let aBoolean = false; //ezt sem szabad idézőjelbe rakni

let anUndefined = undefined; //ezt sem szabad idézőjelbe rakni

let aNull = null; //ezt sem szabad idézőjelbe rakni

let notANumber = NaN; // not a number, ezt sem írjuk idézőjelbe, ez egy szám, példa: 0 / 0 -> hibás matematikailag

console.log(typeof aString); // string a típusa
console.log(typeof anUndefined); // undefined a típusa
console.log(typeof aNull); // object a típusa
console.log(typeof notANumber); // number a típusa

function aFunction1() {
    //ez a függvény belseje
    // a függvény mindenképpen return-öl ha lefuttatjuk, ha nem adunk meg return-t akkor "undefined-ot" ad vissza
    return "this is a function"
};

console.log(aFunction1());

const aFunction2 = function(){
    //ez is egy függvény, majdnem ugyanúgy viselkedik mintha a függvénynek neve lenne, ez egy anonim függvény
    return "this is another function"
}

console.log(aFunction2()); //minden változóba mentett dolgunk csak akkor férünk hozzá ami utána jön, előtte nem érhető el az eltárolt információ
/* 
if() {
    //ide jön ha teljesül a feltételünk
  } else {
    
  } */

  console.log("0" == 0);
  console.log("0" === 0); // 3 db = jel használható összehasonlításra

 /*  class SmallestIntegerFinder {
    findSmallestInt(args) {
      // ezen ciklussal lehet végig menni (itt pl for ciklus)
    }
  } */ 

const arr = [34, 15, 88, 2] //ez egy tömb

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
for (const item of arr) {
    console.log(item);
}