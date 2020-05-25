/* Task 1.1
let x = 1;
let y = 2;
let res1 = x + "" + y;
console.log(res1);
console.log(typeof res1);
*/

/*Task 1.2
let x = 1;
let y = 2;
let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2); */

/* Task 1.3
let x = 1;
let y = 2;
let res3 = !! (x + y);
console.log(res3);
console.log(typeof res3);*/

/* Task 1.4
let x = 1;
let y = 2;
let res4 = parseFloat("xy");
console.log(res4);
console.log(typeof res4); */

/*Task 2.1
let num = prompt("Is Number positive?", ""); 
if (num % 2 == 0 && num >= 0) {
    console.log("Число є парним та додатним");
} else {
    console.log("Число не є парним та додатним");
}*/

/*Task 2.2
let num = prompt("Введіть будь-яке число", ""); 
if (num % 7 == 0) {
    console.log("Число є кратним 7");
} else {
    console.log("Число не є кратним 7");
}*/

/*Task 3
let arr = [1, "Рядок", true, null];
console.log(arr.length);
let num = prompt("Додайте своє значення до масиву", ""); 
arr[4] = num;
console.log(arr[4]);
console.log(arr);
arr.shift();
console.log(arr);*/

/*Task 4
let cities = ["Rome", "Lviv", "Warsaw"];
cities = cities.join(" * ");
console.log(cities);*/


/*Task 5
let isAdult = prompt("Скільки вам років?", ""); 
if (isAdult >= 0 && isAdult >=10 || isAdult >=18) {
    console.log("Ви досягли повнолітнього віку");
} else if (isAdult >= 0 && isAdult < 10) {
    console.log("Ви ще надто молоді");
} else {
    console.log("Error");
}*/

/*Task 6 
let quest = confirm("Введите значения сторон треугольника для вычисления его площади по формуле Герона");
let side1 = prompt("сторона a", "");
let side2 = prompt("сторона b", "");
let side3 = prompt("сторона c", "");
let p = (+side1 + +side2 + +side3) / 2;
let ps = p * ((p - side1) * (p - side2) * (p - side3));
let square = ps ** (1/2);
let dec = square.toFixed(3);
if (side1 < 0 || side2 < 0 || side3 < 0) {
    console.log("Incorrect data");
} else if (side1.trim || side2.trim || side3.trim) {
    console.log("Incorrect data");
} else if (side3 ** 2 == (side1 ** 2) +  (side2 ** 2)) {
    console.log("Треугольник является прямоугольным");
} else {
    console.log(dec);
}*/


/*Task 7
switch (new Date().getHours()) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 23: 
    case 24:
        console.log("Доброї ночі");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Доброго ранку");
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log("Доброго дня");
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        console.log("Доброго вечора");
        break;
}*/

/*let d = new Date();
console.log(d.getHours());
if (d.getHours() < 5 || d.getHours() >= 23) {
    console.log("Доброї ночі");
} else if (d.getHours() >= 5 && d.getHours() < 11) {
    console.log("Доброго ранку");
} else if (d.getHours() >= 11 && d.getHours() < 17) {
    console.log("Доброго дня");
} else if (d.getHours() >= 17 && d.getHours() < 23) {
    console.log("Доброго вечора");
}*/
