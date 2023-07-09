function joinUs() {
  let name = prompt('What is your name?');
  let email = prompt('what is you email?');
  if (name.length > 0 && email.length > 0) {
    alert(
      `Thank you ${name} we will send to ${email} a lesson options as soon as possible. So you can learn some new skills. `
    );
  } else if (name.length === 0 && email.length > 0) {
    alert(
      `Thank you, we will send to ${email} a lesson options as sson as possible. So you can learn some new skills.`
    );
  } else if (name.length > 0 && email.length === 0) {
    alert(
      `Thank you ${name} for visiting our page. If you want to find out more about our lessons, please write down your e-mail and we will be it touch with you soon. Have a great day!`
    );
  } else {
    alert(
      'Thank you for visiting our website. If you want to find out more about our lessons please let us know your email adress and we will be in touch with you soon. Have a great day!'
    );
  }
}

let joinButtonCosmetic = document.querySelector('.btn-cosmetic');
joinButtonCosmetic.addEventListener('click', joinUs);

let joinButtonMedicin = document.querySelector('.btn-medicine');
joinButtonMedicin.addEventListener('click', joinUs);
let joinButtonMedicinNow = document.querySelector('.btn-medicine-small');
joinButtonMedicinNow.addEventListener('click', joinUs);

let joinButtonScratch = document.querySelector('.btn-scratch');
joinButtonScratch.addEventListener('click', joinUs);
