// 1. Texto truncado
// dado una cadena de texto de n caracteres,
// truncar la cadena de texto a determinado número de caracteres
// en base aun argumento pasado en f(n), donde n es un numero natural > 0
// además concatenear la frase "... Leer más"
// Ej.
/**
 * const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
 * n = 10, f(n)
 *  output = `Lorem ipsu... Leer más`
 */

// 2. vocales
// dado una cadena de texto de n caracteres
// buscar en cada palabra que compone dicha cadena la última vocal en la
// presente palabra y reemplazarla por una vocal pasada como argumento
// Ej.
/**
 * const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`; 
 * vocal pasada como argumento f(a)
   output =  'Loram ipsam dolar sat amat, consectetar adipiscang elat.'
   ** nótese     ^     ^     ^   ^    ^            ^         ^     ^  
 */

// 3. Wolfram Alpha
// https://www.wolframalpha.com/
// Wolfram Alpha es un sitio que ofrece una herremienta matemática y pedagógica
// que ayuda a los estudiantes a resolver ecuaciones matemáticas paso a paso
// y de forma gráfica
// Ejercicio,
// Dada una ecuacion de primer grado del tipo, ax + b = c
// donde a, b y c son valores constantes y 'x' es un valor desconocido o variable
// escribir ua funcion que tome una ecuación de primer grado
// y resuelva imprimiendo paso a paso la resolución de la misma
// Ej.
//  f('3x+6=0')
//  (Paso 1) -> 3x = -6
//  (Paso 2) -> x = -6/3
//  (Paso 3) -> x = -2
// fin
// BONUS (AYUDA)
// para input = "3x+6=0"
// donde el patron a buscar (?<ax>[0-9]*x)(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$
// y
// ?<ax> -> nombre del grupo
// * -> busca de cero conicidencias a ilimitadas
// + -> busca de una conicidencia a ilimitadas
// [\+|-] -> busca el operador + o el -
// $ -> estrictamente debe finalizar con un valor
/*
  const pattern = /(?<ax>[0-9]*x)(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$/m;
  (?<ax>[0-9]*x)|(?<axn>[0-9]*x)|(?<operador>[\+|-])|(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$
  const string = "3x+6=0";
  const arrayResult = Array.from(string.match(pattern));

  // arrayResult = [ '3x+6=0', '3x', '+', '6', '=', '0' ]
*/

let solveEquationsFirstDegree = (equationSchema) => {
  const pattern = /(?<ax>[0-9]*x)(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$/m;
  const arrayExtracted = Array.from(equationSchema.match(pattern));

  console.log("Solving: ", arrayExtracted[0]);
  const steps = arrayExtracted.slice(1, arrayExtracted.length);

  let leftSide = []; // all members before =
  let rightSide = []; // members after equals

  // grouping -> put all elemens that there aren't a variable in the  rigth side (invert sign)
  leftSide = grouping(steps, "variables");
  rightSide = grouping(steps, "constants");

  // operate
  leftSide = operate(leftSide);
  rightSide = operate(rightSide);

  // clear
  return clearEquationToX(leftSide, rightSide);
};

let grouping = function (arr, types) {
  let result = [];
  let leftSideToEvaluate = [];
  let equealsIndex = arr.indexOf("=");
  // left side to evaluate
  leftSideToEvaluate = arr.slice(0, equealsIndex);

  if (types === "constants") {
    // put first elements to right side if there are constants
    let temp = arr.slice(equealsIndex + 1, arr.length);

    leftSideToEvaluate.forEach((element) => {
      if (!element.includes("x")) {
        // test if is a number
        let whichNumber = Number.parseFloat(element);
        if (Number.isNaN(whichNumber)) {
          // could be a sign
          if (element === "+") {
            temp.push("-");
          } else {
            temp.push("+");
          }
        } else {
          temp.push(whichNumber.toString());
        }
      }
    });
    //result = operate(temp);
    result = temp;
  }

  if (types === "variables") {
    let prepareToOperate = [];
    leftSideToEvaluate.forEach((element) => {
      if (
        element.includes("x") ||
        element.includes("+") ||
        element.includes("-")
      ) {
        // prepare to evaluate and group
        prepareToOperate.push(element);
      }
    });

    // result = operate(prepareToOperate);
    // result = result + "x";
    result = prepareToOperate;
  }
  return result;
};

let operate = (arrayToOperate) => {
  if (arrayToOperate.length == 1) return arrayToOperate[0];
  let result = 0;
  let operation = arrayToOperate.slice(0, 3);
  let nextEvaluation = arrayToOperate.slice(3, arrayToOperate.length);

  let leftSide = extractNumber(operation[0]);
  let operator = operation[1];
  let rightSide = extractNumber(operation[2] ? operation[2] : "0");

  if (operator === "+") result = leftSide + rightSide;
  if (operator === "-") result = leftSide - rightSide;

  nextEvaluation.unshift(result.toString());
  return operate(nextEvaluation);
};

let extractNumber = (varExpression) => {
  let number = 0;
  if (varExpression === "x") return 1;
  if (varExpression.includes("x")) {
    let tem = varExpression.replace("x", "");
    number = Number.parseInt(tem);
  } else {
    number = Number.parseInt(varExpression);
  }
  return Number.isNaN(number) ? 0 : number;
};

let clearEquationToX = (leftSide, rightSide) => {
  return leftSide + "x" + "=" + rightSide;
};

const equationOne = "3x+6=0";
const equationTwo = "x+10=35";
const equationThree = "10x-100=30";

console.log(solveEquationsFirstDegree(equationOne));
console.log(solveEquationsFirstDegree(equationTwo));
console.log(solveEquationsFirstDegree(equationThree));
