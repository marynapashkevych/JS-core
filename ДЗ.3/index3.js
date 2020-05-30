/* Task 1
let arr = [2, 3, 4, 5];
let res = 1;
for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
}
alert(res);*/

/* Task 1.1
let arr = [2, 3, 4, 5];
let res = 1;
let i = 0;
while (i < arr.length) {
    res *= arr[i];
    i++;
}
console.log(res);*/


/* Task 2
for (let i = 0; i < 16; i++) {
   if (i % 2 == 0) {
   console.log("Number " + i + " odd");
} else {
    console.log("Number " + i + " even");
   }
}*/

/* Task 3 
function randArray(k) {
    emptyArr = [];
    for (let i = 0; i < k; i++) {
        emptyArr[i] = Math.floor(Math.random() * 500) + 1;
    
    }
    return emptyArr;
}
console.log(randArray(8))*/



/* Task 4
function raiseToDegree(a, b) {
    let result = a;

    for (let i = 1; i < b; i++) {
        result *=a;
    }
    return result;
}

let a = prompt("a ", "");
let b = prompt("b ", "");

if (b < 1) {
    alert ("Error");
} else {
    alert (raiseToDegree(a, b));
}  */

/* Task 5
function findMin() {
    
    for (let i = 0; i < arguments.length; i++) {
        arguments[i];
    }
    console.log(Math.min(...arguments));
}
findMin(8, 9, 7, 10, 6);*/

/* Task 6
function findUnique(arr) {
    
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) 
         { for (let j = i + 1; j < n; j++)
            { if (arr[i] === arr[j]) return false; }
         }
        return true;
    }

console.log(findUnique([1, 2, 3, 5, 6]))*/


/*Task 7
function lastElem(a, i) {
    let arr = [3, 4, 10, -5];
    arr = a;
    if (i === undefined) {
        return arr[arr.length -1];
      }
    return arr.slice(-i);
}
console.log(lastElem([3, 4, 10, -5, 9, 8])); */

/*Task 8
function string() {
    let string = 'i love java script';
    var splits = string.split(" ");
    var stringFirstUppercase = "";
  
    for (let i = 0; i < splits.length; i++) {
      let text = splits[i];
      let first = text.substring(0, 1).toUpperCase();
      let letters = text.substring(1, text.length);
      stringFirstUppercase += first + letters + " ";
    }
  
    console.log(stringFirstUppercase);
  }
  string();*/


