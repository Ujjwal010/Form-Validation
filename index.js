const info = document.getElementById("info");
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");

function submitForm() {
  const passreg = /^(?=.*[A-Z])(?=.*\d)([a-zA-Z0-9]){5,10}$/.test(
    password.value
  );
  const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email.value
  );

  if (
    fname.value === "" ||
    lname.value === "" ||
    phone.value === "" ||
    password.value === "" ||
    email.value === "" ||
    passreg === false ||
    emailreg === false ||
    country.value === ""
  ) {
    let para = document.createElement("h3");
    let node = document.createTextNode("Please enter valid information");
    para.appendChild(node);
    info.insertBefore(para, form);
    para.classList.add("para");

    return false;
  } else {
    para.remove();
    return true;
  }
}
