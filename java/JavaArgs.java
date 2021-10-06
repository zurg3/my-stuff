public class JavaArgs {
  public static void main(String[] args) {
    System.out.printf("Argc: %d\n\n", args.length);

    System.out.printf("Argv:\n");
    for (int i = 0; i < args.length; i++) {
      System.out.printf("%d - %s\n", i, args[i]);
    }
  }
}
