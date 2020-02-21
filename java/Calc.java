import java.util.Scanner;

public class Calc {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    float a, b;

    System.out.print("Enter the first number: ");
    a = input.nextFloat();
    System.out.print("Enter the second number: ");
    b = input.nextFloat();

    System.out.printf("%g+%g=%g\n", a, b, a + b);
    System.out.printf("%g-%g=%g\n", a, b, a - b);
    System.out.printf("%g*%g=%g\n", a, b, a * b);
    System.out.printf("%g/%g=%g\n", a, b, a / b);

    input.close();
  }
}
