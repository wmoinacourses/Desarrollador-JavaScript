let contador = 0

function fibonacci(num){
 if (num==1)  return 0
 if (num==2)  return 1
  contador++
 return fibonacci (num-1) + fibonacci (num-2)
}



fibonacci(1)//0
fibonacci(2)//1
fibonacci(3)//1
fibonacci(8)//13
