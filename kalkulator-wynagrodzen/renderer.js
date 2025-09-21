document.getElementById('calculate').addEventListener('click', () => {
  const rate = parseFloat(document.getElementById('rate').value);
  const hours = parseFloat(document.getElementById('hours').value);
  const bonus = parseFloat(document.getElementById('bonus').value);

  if (isNaN(rate) || isNaN(hours) || isNaN(bonus)) {
    document.getElementById('result').textContent = 'Proszę wprowadzić poprawne wartości.';
    return;
  }

  const salary = rate * hours + bonus;
  document.getElementById('result').textContent = `Wynagrodzenie: ${salary.toFixed(2)} PLN`;
});