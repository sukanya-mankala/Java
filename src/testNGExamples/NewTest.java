package testNGExamples;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class NewTest {
  @Test
  public void first() {
	  System.out.println("first print ");
  }
  
  @Test
  public void second() {
	  System.out.println("second print ");
  }
  
  @BeforeMethod
  public void beforem() {
	  System.out.println("before moethod print ");
  }
  
  @AfterMethod
  public void afterm() {
	  System.out.println("after moethod print ");
  }
  
  @BeforeTest
  public void beforeT() {
	  System.out.println("before Test print ");
  }
  
  @AfterTest
  public void afterT() {
	  System.out.println("After Test print ");
  }
  
}
