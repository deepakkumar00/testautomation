package Definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Hooks.HookClass;;

public class Performer {
	WebDriver driver = HookClass.driver;
	
	public int indexer(int s, int e)
	{
		return (int)(Math.random()*(e-s+1)+s);
	}
	
	
	@Given("User is on order page")
	public void user_is_on_order_page() throws InterruptedException {
		driver.findElement(By.xpath("//li[@id='menu-sale']")).click();
		Thread.sleep(1000);
		driver.findElement(By.linkText("Orders")).click();
	}
	
	@When("Click on delete button")
	public void click_on_delete_button() {
	    driver.findElement(By.id("button-delete")).click();
	}

	@Then("Warning alert must appear")
	public void warning_alert_must_appear() throws InterruptedException {
		driver.switchTo().defaultContent();
		Thread.sleep(2000);
		WebElement ele = null;
		try{
			ele = driver.findElement(By.cssSelector("div.alert.alert-warning"));
		}
		catch(Exception e)
		{
			System.out.println(e.toString());
		}
		Assert.assertNotNull(ele);
	    
	}

	@When("Select an order from the table")
	public void select_an_order_from_the_table() {
	    List<WebElement> orderList = driver.findElements(By.xpath("//tbody[1]/tr/td/input[1]"));
	    int max = orderList.size(); 
	    orderList.get(indexer(0, max)).click();
	}
	
	@When("Accepts the alert message")
	public void accepts_the_alert_message() {
		Alert obj = driver.switchTo().alert();
	    obj.accept();
	}

	@Then("A success message appears")
	public void a_success_message_appears() throws InterruptedException {
		driver.switchTo().defaultContent();
		Thread.sleep(2000);
		WebElement ele = driver.findElement(By.cssSelector("div.alert.alert-success"));
		Assert.assertNotNull(ele);
	}
	
	//-----------------------------------------------------------------------------------//

	@When("Selects an status from drop down")
	public void selects_an_status_from_drop_down() {
	    List<WebElement> lst = driver.findElements(By.xpath("//select/option"));
	    lst.get(indexer(1, lst.size())).click(); 
	}

	@When("Clicks on filter button")
	public void clicks_on_filter_button() throws InterruptedException {
	    driver.findElement(By.id("button-filter")).click();
	    Thread.sleep(5000);
	}

	@Then("Filtered table appears")
	public void filtered_table_appears() {
	    Assert.assertNotNull(driver.findElement(By.xpath("//*[contains(text(), 'Showing')]")));
	}
	
	//--------------------------------------------------------------------------------------------//
}
