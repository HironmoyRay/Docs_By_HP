document.getElementById("btn-bold").addEventListener("click", function () {
  const textField = document.getElementById("text-field");
  const bold = textField.classList.add("bold");
  //   console.log("Btn Clicked");
});
document.getElementById("btn-italic").addEventListener("click", function () {
  const textField = document.getElementById("text-field");
  const italic = textField.classList.add("italic");
  //   console.log("Btn Clicked");
});
document.getElementById("btn-underline").addEventListener("click", function () {
  const textField = document.getElementById("text-field");
  const underline = textField.classList.add("underline");
  //   console.log("Btn Clicked");
});
