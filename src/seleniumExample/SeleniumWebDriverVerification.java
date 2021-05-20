package seleniumExample;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SeleniumWebDriverVerification {
    public static void main(String args[]) throws InterruptedException {
        WebDriver driver = new FirefoxDriver();
        driver.get("https://www.training-support.net/");
        System.out.println(driver.getTitle());
        //driver.findElement(By.id("about-link")).click();
        System.out.println(driver.findElement(By.linkText("About Us")).getText());
        System.out.println(driver.findElement(By.className("green")).getText());
        Thread.sleep(5000);
        driver.close();
    }
}