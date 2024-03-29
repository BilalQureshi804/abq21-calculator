#!usr/bin/env node
//
import inquirer from "inquirer";
const  answer =await inquirer.prompt([
 {
  name:"firstNumber",
  type:"number",
 message:"Enter your first number"

 },

 {
 name:"secondNumber",
 type:"number",
 message:"Enter your second number"

 },
 {
 name:"operation",
 type:"list",
 message:"select my operator from the following",
 choices:["Addition","Subtraction","Multiplication","Division"]
 }
]);


 //conditional statement 
 if (answer.operator ==="Addition"){
    console.log(answer.operator.firstNumber + answer.secondNumber);
 } else if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
 } else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
 } else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
 } else{
    console.log(answer.firstNumber * answer.secondNumber);
 }


 