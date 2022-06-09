// function confirmation() {
//     // yescon.preventDefault();
    
//     // const  name=document.getElementById("email").value;
//     //   console.log(name)
//     //   const password=document.getElementById("password").value;
  
//     //   if (!name || !password ) {
//     //       console.log("You did enter an email or password!")
  
//     //   }
//     //   else {
//     //       console.log("You have logged in")
//     //       displayMessage();
//     //   }
// }
// const messagec = document.querySelector("#modal-popup2");
// function displayMessage() {
//    // alert("Hello beautiful! You have 5000 points which means you could redeam one haircut for FREE!!!");
  
//    document.body.append(message);
//    var modal2 = new bootstrap.Modal(message.querySelector('.modal'));
//    modal2.show();   
// }
  

var display = null;
function confirmation() {
if (display !== null) display.remove();

display = document.createElement("div");
display.innerHTML =`<div id="modal-popup2" >
          <div class="modal fade" id="confirm" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div class="modal-dialog">
                 <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel2">Confirmation!</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body" id="modalexample3" > This is a confirmation message! We can't wait to see you! Thank you for choosing Sabra Salon! :)
                         <div class="mb-3">
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
        </div>`;
    document.body.append(display);
    var modal = new bootstrap.Modal(display.querySelector('.modal'));
    modal.show();


}