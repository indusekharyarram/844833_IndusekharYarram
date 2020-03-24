package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class logout {
	WebDriver driver;
	By Administration=By.xpath("//img[@src='images/administration-button.gif']");
	By Username=By.name("login");
	By Password=By.name("password");
	By Login=By.name("DoLogin");
	public void launch()
	{
		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://examples.codecharge.com/TaskManager/Default.php");
		driver.findElement(Administration).click();
	}
	public void login(String username, String password)
	{
		driver.findElement(Username).sendKeys(username);
		driver.findElement(Password).sendKeys(password);
		driver.findElement(Login).click();
	}
	public void Logout()
	{
		driver.findElement(By.linkText("Logout")).click();
	}
	public void Assert()
	{
		String a=driver.findElement(By.xpath("/html/body/center/table/tbody/tr/td/form/table[2]/tbody/tr[1]/td[1]")).getText();
		Assert.assertEquals("Login",a);
	}
}
