package testNGTests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class Activity1 {
	WebDriver driver;
@BeforeMethod
  public void beforeM() {
	driver =new FirefoxDriver();
	driver.get("https://www.training-support.net");
  }
@Test
public void test() {
	String title =driver.getTitle();
	System.out.println(title);
	Assert.assertEquals(title,"Training Support","Title not matching");
	driver.findElement(By.id("about-link")).click();
	System.out.println("The new page title is "+driver.getTitle());
	
	Assert.assertEquals(driver.getTitle(),"About Training Support");
}

@AfterMethod
public void afterM() {
	driver.quit();
	
}
}
