let menubar = document.querySelector(".menu_bar");
let closebar = document.querySelector(".closebar");
let menulist = document.querySelector(".menulist");
let menutext = document.querySelectorAll(".menu_click");
let form = document.forms["message_form"];
let email = document.querySelector(".email_box");
let email_name = document.querySelector(".name");
let email_text = document.querySelector(".email_text");
let send_button = document.querySelector(".submit_button");

menubar.addEventListener("click", function () {
  menulist.style.display = "flex";
});
closebar.addEventListener("click", function (e) {
  menulist.style.display = "none";
});

this.addEventListener("resize", function () {
  this.location.reload();
});

// menutext.addEventListener('click', function(){
//     menulist.style.display = 'none';
// })
console.log(window.innerWidth);

for (let i = 0; i < menutext.length; i++) {
  menutext[i].addEventListener("click", function () {
    if (window.innerWidth <= 700) {
      menulist.style.display = "none";
    }
    console.log(this);
  });
}

console.log(menutext);

// function sendEmail() {
//   Email.send({
//     SecureToken: "8cf474a3-19ad-417f-a8e3-7a05cf6333ed",
//     // Host: "smtp.elasticemail.com",
//     // Username: "ekomabasiuk@gmail.com",
//     // Password: "6FD060787826F07EDEB0E169496D633CFAE7",
//     To: "ekomabasiuk@gmail.com",
//     From: email.value,
//     Subject: "Contact From Portfolio webiste",
//     Body: `Name: ${email_name.value} <br>
//         message: ${email_text.value}`,
//   }).then((message) => {
//     alert(message);
//   });

// document
// .querySelector(".submit_button")
// .addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(` Your email ${form[0].value} has been sent`);

//   document.querySelector(".email_box").value = "";
//   document.querySelector(".name").value = "";
//   document.querySelector(".email_subject").value = "";
//   document.querySelector(".text_box").value = "";
// });
