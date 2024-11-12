// Фіксовані курси валют
const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  UAH: 27,
};

// Функція конвертації
function convertCurrency() {
  // Отримуємо введену суму та вибрані валюти
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  // Перевіряємо, чи введено коректну суму
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("result").innerText =
      "Будь ласка, введіть коректну суму.";
    return;
  }

  // Конвертуємо суму в базову валюту (USD), а потім у цільову
  const amountInUSD = amount / exchangeRates[fromCurrency];
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];

  // Відображаємо результат конвертації
  document.getElementById(
    "result"
  ).innerText = `Результат: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
