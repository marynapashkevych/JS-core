/* Task 1

let d = document.body.children[0];
    d.outerHTML = "<div>Last</div>";

//способ 2//

    document.getElementById("test").innerHTML = "Last";
    
    */


/*Task 2

let idCat = document.getElementById("dog");
document.getElementById("dog").src="cat.jpg";
idCat.id = "cat"
alert(document.body.children[0].outerHTML);
*/


// Task 3

// let elements = document.querySelectorAll("div p");

//  for (i = 0; i < elements.length; i++) {
//     console.log("Selector text " + [i] + ": " + elements[i].innerHTML);
//  }


// Task 4

// let list = document.getElementById("list").children;

// for( let i = 0; i < list.length; i++) {
//     list[i].innerHTML
// }
// console.log(list[0].innerHTML + ", " + list[4].innerHTML+ ", " + list[1].innerHTML + ", " + list[3].innerHTML + ", " + list[2].innerHTML)

// 2 способ:
// let list = document.querySelectorAll('li');
// document.getElementById("demo").innerHTML = (list[0].innerHTML + ", " + list[4].innerHTML+ ", " + list[1].innerHTML + ", " + list[3].innerHTML + ", " + list[2].innerHTML);
 

// Task 5


// document.querySelector("h1").style.backgroundColor = "green";
// let text = document.querySelectorAll("p");
// text[0].style.fontWeight = "bold";
// text[1].style.color = "red";
// text[2].style.textDecoration = "underline"
// text[3].style.fontStyle = "italic";
// document.querySelector("ul").style.display = "flex";
// let liValue = document.querySelectorAll("li");
// liValue[2].innerHTML = "vertical!";
// document.querySelector("ul").style.listStyleType = "none";
// document.querySelector("span").style.visibility = "hidden";



// Task 6
// function returnInput() {
//     let inputText1 = "";
//     let inputText2 = "";
//     inputText1 = prompt("Enter textmessage 1", "");
//     inputText2 = prompt("Enter textmessage 2", "");
//     // document.getElementById("input1").value = inputText1;
//     // document.getElementById("input2").value = inputText2;
//     document.getElementById("input2").value = inputText1;
//     document.getElementById("input1").value = inputText2;
// }
// returnInput()


let newMain = document.createElement("main");
newMain.className = "mainClass check item";

// document.write(newMain.innerHTML)

let myDiv = document.createElement("div");
myDiv.id = "myDiv";
newMain.prepend(myDiv);
let newp = document.createElement("p");
let text = document.createTextNode("First paragraph");
newp.prepend(text);
myDiv.prepend(newp);
document.write(newp.innerHTML)

let bodyElements = document.body.children;
for (let i = 0; i < bodyElements.length; i++) {
    alert(bodyElements[i]); // DIV SCRIPT
}
    