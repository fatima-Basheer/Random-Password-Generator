const display = document.querySelector("input");
const button = document.querySelector("button");
let char = "abcdefghijklmnopqrstuvwxyzABCDEF!@#$%^&*()_=123654789";
button.onclick = () => {
  let i = 0;
  let randomPassword = "";
  for (i = 0; i < 16; i++) {
    randomPassword =
      randomPassword + char.charAt(Math.floor(Math.random() * char.length));
    display.value = randomPassword;
  }
};
