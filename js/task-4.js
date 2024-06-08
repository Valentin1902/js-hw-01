let credits = 23580;
const pricePerDroid = 3000;
const input = prompt("Скільки телевізорів ви хочете купити?");

if (input === null) {
  console.log("Операцію скасовано!");
} else {
  const totalPrice = input * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    credits -= totalPrice;
    console.log(
      `Ви купили ${input} телевізорів, на рахунку залишилося ${credits} кредитів.`
    );
  }
}
