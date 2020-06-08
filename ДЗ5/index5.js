/* Task 1


function propsCount(mentor) {

    return Object.keys(mentor).length;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    name: "Nick"
}
// console.log(Object.keys(mentor).length)

console.log(propsCount(mentor))*/


/* Универсальный вариант


function propsCount(currentObject) {

    return Object.keys(mentor).length;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    name: "Nick"
}

console.log(propsCount(mentor))*/

/*Task 2

let prices = {
    banana: 100,
    orange: 200,
    apples: 30,
    mango: 40,
    cherry: 50
    
}   
    function showProps(obj) {
        arrObj = [];
        arrProp = [];
        for (let key in obj) {
            arrObj.push(obj[key]);
        }
        for (let key in obj) {
            arrProp.push( key );
        }

        console.log(arrObj);
        console.log(arrProp);
        

    } 
showProps(prices) */



/* Task 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(this.name + " " + this.surname)
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName() {
        console.log(this.name + " " + this.surname);
    }
    showFullName(midleName) {
        console.log(this.surname + " " + this.name + " " + midleName);
    }
    showCourse() {
       return new Date().getFullYear() - this.year;
    }
} 
var stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

*/

/* Task 4

class Worker {
    #experience = 1.2;

    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    
    get setExp() {
       return this.#experience;
    }
    set setExp(value) {
       this.#experience = value;
    }
    showSalary() {
        console.log (this.fullName + " salary: " + (this.dayRate * this.workingDays));
    }
    showExp () {
       console.log("New experience: " + this.#experience);
    }
    showSalaryWithExperience() {
        console.log(this.fullName + " salary: " + (this.dayRate * this.workingDays * this.#experience));
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
worker1.showExp();
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
worker1.showExp();
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
worker2.showExp();
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
worker2.showExp();
worker2.showSalaryWithExperience();


let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
worker3.showExp();
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
worker3.showExp();
worker3.showSalaryWithExperience();




let workers = [worker1, worker2, worker3];
workers.sort(function (a, b) {
    if (a.dayRate * a.workingDays > b.dayRate * b.workingDays) {
        return 1;
    }
    if (a.dayRate * a.workingDays < b.dayRate * b.workingDays) {
        return -1;
    }
    return 0;
});
console.log(workers[0].fullName + ": " + (workers[0].dayRate * workers[0].workingDays * workers[0].setExp));
console.log(workers[1].fullName + ": " + (workers[1].dayRate * workers[1].workingDays * workers[1].setExp));
console.log(workers[2].fullName + ": " + (workers[2].dayRate * workers[2].workingDays * workers[2].setExp));

*/

/* Task 4 (не сделала)
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
     return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor (side, height) {
        this.side = side;
        this.height = height;
    }
    getArea() {
        console.log(0.5 * this.side * this.height);
    }
}
class Square extends GeometricFigure {
    constructor (squareSide) {
        this.squareSide = squareSide;
    }
    getArea() {
        console.log(Math.pow(this.squareSide, 2));
    }
}
class Circle extends GeometricFigure {
    constructor (radius) {
        this.radius = radius;
    }
    getArea() {
        console.log(Math.PI * Math.pow(this.radius, 2));
    }
}

function handleFigures(figures) {
    let figures = [];
    if (figures instanceof GeometricFigure) {
        console.log(figures.toString());
        console.log(figures.getArea())
    }
    else if ()
    const figures = ;

    return figures.toString(), figures.getArea();


    
}*/