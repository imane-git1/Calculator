function calculateResult() {
  // Récupérer les valeurs des champs et de l'opération sélectionnée
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const operation = document.getElementById('operation').value;

  // Vérifier si les nombres sont valides
  if (isNaN(number1) || isNaN(number2)) {
      alert('Veuillez entrer des nombres valides.');
      return;
  }

  // Calculer le résultat en fonction de l'opération
  let result;
  switch (operation) {
      case 'add':
          result = number1 + number2;
          break;
      case 'subtract':
          result = number1 - number2;
          break;
      case 'multiply':
          result = number1 * number2;
          break;
      case 'divide':
          if (number2 === 0) {
              alert('Division par zéro impossible.');
              return;
          }
          result = number1 / number2;
          break;
      default:
          alert('Opération non valide.');
          return;
  }

  // Afficher le résultat
  document.getElementById('result').textContent = result;
}