function logIn(event) {
  event.preventDefault();

    const  name=document.getElementById("email").value;
    console.log(name)
    const password=document.getElementById("password").value;

    if (!name || !password ) {
        console.log("You did enter an email or password!")

    }
    else {
        console.log("You have logged in")
        displayMessage();
    }
}
const message = document.querySelector("#modal-popup");
function displayMessage() {
 // alert("Hello beautiful! You have 5000 points which means you could redeam one haircut for FREE!!!");

 document.body.append(message);
 var modal = new bootstrap.Modal(message.querySelector('.modal'));
 modal.show();   
}











