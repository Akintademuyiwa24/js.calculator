const o = prompt('Enter operator : + - * /');
const a = parseFloat(parseInt(prompt('Enter a number')));
const b = parseFloat(parseInt(prompt('Enter another number')));

// document.write(num1 + num2);
switch (o) {
   case "+":
      let s = a+b;
      alert("The sum is: " + s);
      break;
   case "-":
      let d = a-b;
      alert("The answer is : " + d);
      break;
   case "*":
      let m = a*b;
      alert("The answer is : " + m);
      break;
   case "/":
      let e = a/b;
      alert("The answer is : " + e);
      break;
   default:
      alert("Bad expression");
      break;
}

alert("Go again!")