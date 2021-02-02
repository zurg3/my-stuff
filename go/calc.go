package main

import "fmt"

func main() {
  var a, b float32

  fmt.Print("Enter the first number: ")
  fmt.Scanf("%f", &a)
  fmt.Print("Enter the second number: ")
  fmt.Scanf("%f", &b)

  fmt.Printf("%g+%g=%g\n", a, b, a + b)
  fmt.Printf("%g-%g=%g\n", a, b, a - b)
  fmt.Printf("%g*%g=%g\n", a, b, a * b)
  fmt.Printf("%g/%g=%g\n", a, b, a / b)
}
