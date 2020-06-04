
/*Task 1
function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw "Error";
    }
    return width * height;
}
    try {
       alert(calcRectangleArea(8, 7));
    } catch(error) {
        console.log(error);
    }
*/

/* Task 2
function checkAge () {
    let age = prompt("Сколько Вам лет?", "");
    if (age.trim() === "") {
        throw new Error ("The field is empty! Please enter your age");
    }
    else if (isNaN(age)) {
        throw new Error ("The field is number oriented! Please enter your age");
    }
    else if (age < 14) {
        throw new Error ("You are not adult! You are not allowed to watch this film!");
    }
    return ("Accessed")
}
    try {
        let result = checkAge();
        console.log(result);
    } catch(error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }*/
    

   
  /* Task 4
  function showUser(id) {
    if (id < 0) {
        throw new Error ("Error: ID must not be negative: " + id);
    } 
        return {id, id};
  }

 function showUsers(ids) {
   let emptyArr = [];
   
   emptyArr.forEach(function (id) {
        try {
        let result = showUser(id);
        console.log(result);
    } catch(exception) {
            console.log(exception.name);
            console.log(exception.message);
        }  
    });
    result = emptyArr;
    return result = {ids, ids};
 } 
 console.log(showUsers([7, -12, 44, 22])) */

 /* Task 3
 class MonthException {
     constructor(message) {
         this.name = message;
     }
     showMessage(){
         console.log(this.name);
     }
 }
 let monthexception = new MonthException ("MonthException Incorrect month number");
 

 function showMonthName(month){
    let result = month;
     
    let monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
    if (result > 12) {
        throw new Error("Incorrect month number");
    }
    return monthArr[result - 1];
 }
 try {
    let monthResult = showMonthName(13);
    console.log(monthResult);
} catch (exception) {
    monthexception.showMessage();
} */
 
 
 