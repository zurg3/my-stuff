import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

public class CurrentDate {
  public static void main(String[] args) {
    DateFormat date_format = new SimpleDateFormat("HH:mm:ss dd.MM.yyyy");
    Date current_date = new Date();
    
    System.out.println(date_format.format(current_date));
  }
}
