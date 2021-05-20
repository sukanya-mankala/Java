package testNGExamples;

import org.testng.annotations.Test;

public class NewTest1 {
  @Test(groups="smoke")
  public void second() {
	  System.out.println("seconf print");
  }
}
