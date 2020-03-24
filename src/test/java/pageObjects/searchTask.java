package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class searchTask {
	WebDriver driver;
	public void open()
	{
		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://examples.codecharge.com/TaskManager/Default.php");
	}
	public void typeTask()
	{
		driver.findElement(By.xpath("(//option[@value='1'])[5]")).click();
	}
	public void search()
	{
		driver.findElement(By.xpath("//input[@name='DoSearch']")).click();
	}
	public void Assert()
	{
		String d=driver.findElement(By.xpath("//a[text()='CTS']")).getText();
		Assert.assertEquals("CTS", d);
	}
}
