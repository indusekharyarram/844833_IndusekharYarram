package pageObjects;

import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class addTask {
	WebDriver driver;
	By Administration=By.xpath("//img[@src='images/administration-button.gif']");
	By Username=By.name("login");
	By Password=By.name("password");
	By Login=By.name("DoLogin");
	public void open()
	{
		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://examples.codecharge.com/TaskManager/Default.php");
	}
	public void clickAdministration()
	{
		driver.findElement(Administration).click();
	}
	public void login()
	{
		driver.findElement(Username).sendKeys("admin");
		driver.findElement(Password).sendKeys("admin");
		driver.findElement(Login).click();
	}
	public void AddTask()
	{
		driver.findElement(By.xpath("(//img[@border='0'])[3]")).click();
	}
	public void enterFields()
	{
		driver.findElement(By.xpath("//input[@name='task_name']")).sendKeys("CTS");
	    driver.findElement(By.xpath("//textarea[@name='task_desc']")).sendKeys("Cognizant Technology and Solutions ");
	    driver.findElement(By.xpath("(//option[@value='1'])[1]")).click();
	    driver.findElement(By.xpath("(//option[@value='1'])[2]")).click();
	    driver.findElement(By.xpath("(//option[@value='1'])[3]")).click();
	    driver.findElement(By.xpath("(//option[@value='1'])[4]")).click();
	    driver.findElement(By.xpath("(//option[@value='16'])")).click();
	}
	public void startDate()
	{
		Actions action=new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[8]/td/a/img"))).click().build().perform();
		String parent=driver.getWindowHandle();
		System.out.println(parent);
		Set<String>allWindows=driver.getWindowHandles();
		for(String Window:allWindows)
		{
			System.out.println(Window);
			if(!parent.equalsIgnoreCase(Window))
			{
				driver.switchTo().window(Window);
			}
		}
		Actions actions=new Actions(driver);
		actions.moveToElement(driver.findElement(By.xpath("/html/body/center/table/tbody/tr/td/table/tbody/tr[4]/td[3]/a"))).click().build().perform();
		driver.switchTo().window(parent);
	}
	public void endDate()
	{
		Actions action=new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("/html/body/table[2]/tbody/tr/td/form/table[2]/tbody/tr[9]/td/a/img"))).click().build().perform();
		String parent=driver.getWindowHandle();
		System.out.println(parent);
		Set<String>allWindows=driver.getWindowHandles();
		for(String Window:allWindows)
		{
			System.out.println(Window);
			if(!parent.equalsIgnoreCase(Window))
			{
				driver.switchTo().window(Window);
			}
		}
		Actions actions=new Actions(driver);
		actions.moveToElement(driver.findElement(By.xpath("/html/body/center/table/tbody/tr/td/table/tbody/tr[5]/td[6]/a"))).click().build().perform();
		driver.switchTo().window(parent);
	}
	public void addButton()
	{
		driver.findElement(By.xpath("//input[@name='Insert']")).click();
	}
	public void Assert()
	{
		String c=driver.findElement(By.xpath("//a[text()='CTS']")).getText();
		   Assert.assertEquals("CTS", c);
	}
}
