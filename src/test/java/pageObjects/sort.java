package pageObjects;

import javax.xml.xpath.XPath;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class sort {
	WebDriver driver;
	public void open()
	{
		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://examples.codecharge.com/TaskManager/Default.php");
	}
	public void clickfinishDate() throws InterruptedException
	{
		/*
		 * WebElement y=driver.findElement(By.xpath(
		 * "/html/body/table[3]/tbody/tr/td/table[2]/tbody/tr[1]/td[8]/a")); Actions
		 * action=new Actions(driver); action.doubleClick(y); Thread.sleep(5000);
		 */
		driver.findElement(By.xpath("/html/body/table[3]/tbody/tr/td/table[2]/tbody/tr[1]/td[8]/a")).click();
	}
	public void Assert()
	{
		String e=driver.findElement(By.xpath("//a[text()='CTS']")).getText();
		Assert.assertEquals("CTS", e);
	}
}
