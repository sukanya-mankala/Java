package testNGExamples;

import org.testng.annotations.Test;

public class NewTest2 {
  @Test
  public void third() {
	  System.out.println("third print"); 
  }
  
  
  @Test(groups="smoke")
  public void forth() {
	  System.out.println("forth print"); 
  }
}
