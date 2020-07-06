const button = document.querySelector('button.submit-record');
const enterBtn = document.querySelector('button.submit-welcome');

let objPeople = [{
    name: "Maryna",
    username: "masja1623@gmail.com",
    password: "123"
},
{
    name: "Sviatoslava",
    username: "sviatoslava.pashkevych@gmail.com",
    password: "12345"
}
]

if(localStorage.getItem('objPeople')) {
    objPeople = JSON.parse(localStorage.getItem('objPeople'))
} else {
    objPeople = [{
        name: "Maryna",
        username: "masja1623@gmail.com",
        password: "123"
    },
    {
        name: "Sviatoslava",
        username: "sviatoslava.pashkevych@gmail.com",
        password: "12345"
    }
    ]
}

enterBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let username = document.querySelector("input.input-email").value;
    let password = document.querySelector("input.input-password").value;
    let name = document.querySelector('input.name').value;

    for(i=0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            alert(name + " Вы вошли в систему!")
            window.location.href = "index.html";
            return
        } else if (username == objPeople[1].username) {
            
        }
    }
    alert("Пожалуйста зарегистрируйтесь или проверьте правильность введенных данных")
})

button.addEventListener('click', function() {
    let registerUser = document.querySelector("input.newUser").value;
    let registerPassword = document.querySelector("input.newPassword").value;
    let registerName = document.querySelector('input.name').value;

    let newUser = {
       name: registerName,
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