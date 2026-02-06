
let operator ='%'

let a = 50
let b = 70


switch(operator){


    case '+':
        console.log("The Addition is : " , a + b)
        break

    case '-':
        console.log("The Substraction is : " , a - b)
        break

    case '*':
        console.log("The Multiplication is : " , a * b)
        break;

    case '/' :
         console.log("The Devision is : " , a / b)
         break

    case '%':
         console.log("The Remainder is : " , a % b)
         break

    default :
        console.log("Invalid Operator")
}