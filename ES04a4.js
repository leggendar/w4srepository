const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Uso: node calc.js <numero1> <operazione> <numero2>");
  console.log("Esempio: node calc.js 5 add 3");
  process.exit(1);
}

let [num1, operation, num2] = args;

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (isNaN(num1) || isNaN(num2)) {
  console.error("Errore: inserisci numeri validi.");
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case "add":
  case "+":
    result = num1 + num2;
    break;
  case "sub":
  case "-":
    result = num1 - num2;
    break;
  case "mul":
  case "*":
    result = num1 * num2;
    break;
  case "div":
  case "/":
    if (num2 === 0) {
      console.error("Errore: divisione per zero.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.error("Operazione non supportata. Usa: add, sub, mul, div");
    process.exit(1);
}

console.log(`Risultato: ${result}`);
