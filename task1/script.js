const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  UAH: 27,
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("result").innerText =
      "Будь ласка, введіть коректну суму.";
    return;
  }

  const amountInUSD = amount / exchangeRates[fromCurrency];
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];

  document.getElementById(
    "result"
  ).innerText = `Результат: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
