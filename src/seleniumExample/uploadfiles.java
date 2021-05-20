package seleniumExample;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class uploadfiles {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		WebDriver driver = new FirefoxDriver();
	    File file = new File("Input2.txt");
	    
	    //Open browser
	    driver.get("https://www.training-support.net/selenium/upload");
	    
	    //Find upload field
	    WebElement uploadInput = driver.findElement(By.id("uploadFile"));
	    uploadInput.sendKeys(file.getAbsolutePath());
	    
	    //Click button to upload
	    driver.findElement(By.id("uploadButton")).click();
	    
	    //Read file name
	    String fileName = driver.findElement(By.tagName("h4")).getText();
	    System.out.println(fileName);
	    
	    //Close browser
	    driver.close();
	}

}
