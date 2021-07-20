const form = document.getElementById("form");
const date = document.getElementById("dob");
const luckyNumber = document.getElementById("num");
const resultText = document.getElementById("res-label");
const happyImage = document.getElementById("res-happy");
const unHappyImage = document.getElementById("res-unhappy");
const removeWarning = document.getElementById("removeWarning");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredDate = date.value;
  const enteredNumber = luckyNumber.value;
  const nums = enteredDate.replaceAll("-", "");
  let sum = 0;
  let tempNum = parseInt(nums);
  while (tempNum > 0) {
    let rem = tempNum % 10;
    sum = sum + rem;
    tempNum = parseInt(tempNum / 10);
  }
  if (sum == parseInt(enteredNumber)) {
    resultText.classList.remove("hidden");
    resultText.innerHTML = "Hurray!!You are a lucky person!";
    happyImage.classList.remove("hidden");
    unHappyImage.classList.contains("hidden")
      ? ""
      : unHappyImage.classList.add("hidden");
  } else {
    resultText.classList.remove("hidden");
    resultText.innerHTML = "Oops!!Your birthday is not a lucky number!";
    unHappyImage.classList.remove("hidden");
    happyImage.classList.contains("hidden")
      ? ""
      : happyImage.classList.add("hidden");
  }
});

removeWarning.addEventListener("click", () => {
  document.getElementById("warning-div").classList.add("hidden");
});

//alternative
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const enteredDate = date.value;
//   const enteredNumber = luckyNumber.value;
//   const nums = enteredDate.replaceAll("-", "").split("");
//   let sum = 0;
//   const numsSum = nums.map((num) => (sum = sum + parseInt(num)));
//   if (sum == parseInt(enteredNumber)) {
//     alert("lucky");
//   } else {
//     alert("un-lucky");
//   }
// });
