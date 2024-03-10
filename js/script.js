document.getElementById("btn-bold").addEventListener("click", function () {
  const textField = document.getElementById("text-field");
  const bold = textField.classList.add('bold');
  console.log("Btn Clicked");
});
