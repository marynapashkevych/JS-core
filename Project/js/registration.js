let objPeople = [{
    username: "masja1623@gmail.com",
    password: "123"
},
{
    username: "sviatoslava.pashkevych@gmail.com",
    password: "12345"
}
]

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for(i=0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            alert(username + " is logged in")
            return
        }
    }

    alert("incorrect username or password")
}

function registerUser() {
    let registerUser = document.getElementById("newUser").value;
    let registerPassword = document.getElementById("newPassword").value;
    let newUser = {
       username: registerUser,
       password: registerPassword
    }

    objPeople.push(newUser);
    console.log(objPeople)
}