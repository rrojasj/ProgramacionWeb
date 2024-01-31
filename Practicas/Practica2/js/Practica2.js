/*operador suma*/

let numero1 = 25;
let numero2 = 75;
let texto1 = "Curso JavaScript";
// Este caracter es un espacio en blanco &nbsp;
let texto2 = ' Cenfotec-ProfeFrank';

// Concatenacion de datos usando el signo +
document.write(numero1 + numero2 + "<br>"); /* resultado: 100 */
document.write (texto1 + texto2 + "<br>"); /* resultado: Curso Javascript Cenfotec-ProfeFrank */
document. write(numero1 + texto2 + "<br>"); /* resultado: 25 Cenfotec-ProfeFrank*/

/*operador resta*/
let n1 = 24;
let n2 = 14;
let r = 0;
r= n1 - n2;
document.write(r + "<br>"); /* resultado: 10 */ r= -r;
document.write(r + "<br>"); /* resultado: -10 */

/*operador multiplicacion y division*/
let num1 = 100;
let num2 = 5;
document.write(num1 * num2 + "<br>"); /* resultado: 500 */
document.write(num1 / num2 + "<br>"); /* resultado: 20 */

/*operador incremento y decremento*/
let nume1 = 10;
let nume2 = 31;
let result = 0;
result = ++nume1;
document.write("El resultado es: " + result +" y número 1 es " + nume1 + "<br>"); /* resultado es 11 y numero1 ahora vale 11 */

result = --nume2;
document.write("El numero 2 es: " + nume2 +" y resultado es " + result + "<br>"); /* numero2 vale 30 y resultado ahora es 30 */

/*operador modulo (12*4=48 osea sobran2). Sobrante de una operacion*/
let valor1 = 50;
let valor2 = 4;
document.write("Resultado: " + valor1 % valor2 + "<br>"); /* resultado: 2 */