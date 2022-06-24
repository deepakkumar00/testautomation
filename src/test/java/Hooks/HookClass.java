package Hooks;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HookClass {
	
	public static WebDriver driver;
	String baseURL = "http://retailm1.upskills.in/admin";
	
	@Before
	public void init()
	{
		System.setProperty("webdriver.gecko.driver", ".//lib//geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get(baseURL);
		driver.findElement(By.id("input-username")).sendKeys("admin");
		driver.findElement(By.id("input-password")).sendKeys("Admin@123");
		driver.findElement(By.xpath("//button[@type='submit']")).click();
	}
	
	@After
	public void quit(){
		driver.quit();
	}
	
	
	
	
	
	

}
