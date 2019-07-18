import java.util.Scanner;

public class Calc {
  public static void main(String[] args) {
    float addition, subtraction, multiplication, division;
    float a;
    float b;
    Scanner in = new Scanner(System.in);
    System.out.print("Enter the first number: ");
    a = in.nextFloat();
    System.out.print("Enter the second number: ");
    b = in.nextFloat();
    addition = a + b;
    subtraction = a - b;
    multiplication = a * b;
    division = a / b;
    System.out.printf("%g+%g=%g\n", a, b, addition);
    System.out.printf("%g-%g=%g\n", a, b, subtraction);
    System.out.printf("%g*%g=%g\n", a, b, multiplication);
    System.out.printf("%g/%g=%g\n", a, b, division);
    in.close();
  }
}
