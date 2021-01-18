public class AboutJava {
  public static void main(String[] args) {
    System.out.println("JRE version: " + System.getProperty("java.version"));
    System.out.println("JRE vendor: " + System.getProperty("java.vendor"));
    System.out.println("Java vendor URL: " + System.getProperty("java.vendor.url"));

    System.out.println("Java installation directory: " + System.getProperty("java.home"));

    System.out.println("JVM implementation version: " + System.getProperty("java.vm.version"));
    System.out.println("JVM implementation vendor: " + System.getProperty("java.vm.vendor"));
    System.out.println("JVM implementation name: " + System.getProperty("java.vm.name"));

    System.out.println("Java class format version number: " + System.getProperty("java.class.version"));
    System.out.println("Java class path: " + System.getProperty("java.class.path"));

    System.out.println("List of paths to search when loading libraries: " + System.getProperty("java.library.path"));

    System.out.println("Default temp file path: " + System.getProperty("java.io.tmpdir"));

    System.out.println("Name of JIT compiler to use: " + System.getProperty("java.compiler"));

    System.out.println("OS name: " + System.getProperty("os.name"));
    System.out.println("OS architecture: " + System.getProperty("os.arch"));
    System.out.println("OS version: " + System.getProperty("os.version"));

    System.out.println("File separator: " + System.getProperty("file.separator"));
    System.out.println("Path separator: " + System.getProperty("path.separator"));

    System.out.println("User's account name: " + System.getProperty("user.name"));
    System.out.println("User's home directory: " + System.getProperty("user.home"));
    System.out.println("User's current working directory: " + System.getProperty("user.dir"));
  }
}
