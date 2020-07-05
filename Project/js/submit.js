// // не получается создавать новые значения через итерацию

// const form = document.querySelector('form.registration');
// const button = document.querySelector('button.submit-record');
// const input1 = document.querySelector('input.input-record1');
// const input2 = document.querySelector('input.input-record2');
// const input3 = document.querySelector('input.input-record3');
// let itemsArray1 = localStorage.getItem('items1') ? JSON.parse(localStorage.getItem('items1')) : [];
// let itemsArray2 = localStorage.getItem('items2') ? JSON.parse(localStorage.getItem('items2')) : [];
// let itemsArray3 = localStorage.getItem('items3') ? JSON.parse(localStorage.getItem('items3')) : [];

// const data = JSON.parse(localStorage.getItem('items2'));

// button.addEventListener('click', function(e) {
//   e.preventDefault()

//   itemsArray1.push(input1.value);
//   itemsArray2.push(input2.value);
//   itemsArray3.push(input3.value);
//   if (input1.value.trim() === ""|| input2.value.trim() === "" || input3.value.trim() === "") {
//       alert("Пожалуйста введите все значения");
//     //   Добавляет поля с пустыми значениями
//   } else {
//     localStorage.setItem('items1', JSON.stringify(itemsArray1));
//     localStorage.setItem('items2', JSON.stringify(itemsArray2));
//     localStorage.setItem('items3', JSON.stringify(itemsArray3));

//     input1.value = '';
//     input2.value = '';
//     input3.value = '';

//     alert("Добро пожаловать!");
//     window.location.href = "index.html";
//   }

// });

// document.querySelector('button.clear').addEventListener('click', function() {
//   localStorage.clear();
// });


// const enterBtn = document.querySelector('button.submit-welcome');
// const emailText = document.querySelector('input.input-email');

// enterBtn.addEventListener('click', function(t) {

//     t.preventDefault()
//         if(data == emailText.value) {
//             alert("Вы вошли в систему");
//             window.location.href = "index.html";
//         } else{
//             alert("Пожалуйста, зарегистрируйтесь");
//     } 
// })

// когда ввожу имейл проверяет весь массив и пока не найдет нужный выводит "Пожалуйста зарегистрируйтесь или проверьте правильность введенных данных"

const button = document.querySelector('button.submit-record');
const enterBtn = document.querySelector('button.submit-welcome');

let objPeople = [{
    username: "masja1623@gmail.com",
    password: "123"
},
{
    username: "sviatoslava.pashkevych@gmail.com",
    password: "12345"
}
]

if(localStorage.getItem('objPeople')) {
    objPeople = JSON.parse(localStorage.getItem('objPeople'))
} else {
    objPeople = [{
        username: "masja1623@gmail.com",
        password: "123"
    },
    {
        username: "sviatoslava.pashkevych@gmail.com",
        password: "12345"
    }
    ]
}

enterBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let username = document.querySelector("input.input-email").value;
    let password = document.querySelector("input.input-password").value;

    for(i=0; i < objPeople.length; i++) {
        if(username == objPeople[i].username) {
            alert(username + " Вы вошли в систему!")
            window.location.href = "index.html";
        } else {
            alert("Пожалуйста зарегистрируйтесь или проверьте правильность введенных данных")
        }
    }
})

button.addEventListener('click', function() {
    let registerUser = document.querySelector("input.newUser").value;
    let registerPassword = document.querySelector("input.newPassword").value;
    let newUser = {
       username: registerUser,
       password: registerPassword
    }

    objPeople.push(newUser);
    console.log(objPeople);
    localStorage.setItem('users', JSON.stringify(objPeople))
});

document.querySelector('button.clear').addEventListener('click', function() {
  localStorage.clear();
});