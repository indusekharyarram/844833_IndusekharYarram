package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class validLogin {
WebDriver driver;
By Administration=By.xpath("//img[@src='images/administration-button.gif']");
By Username=By.name("login");
By Password=By.name("password");
By Login=By.name("DoLogin");
public void launch(String browser)
{
	if(browser.equalsIgnoreCase("chrome"))
	{
		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver.exe");
		driver=new ChromeDriver();
	}
	else if(browser.equalsIgnoreCase("Explorer"))
	{
		System.setProperty("webdriver.chrome.driver", "driver\\IEDriverServer.exe");
		driver=new InternetExplorerDriver();
	}
	
	driver.manage().window().maximize();
}
public void open() 
{
	driver.get("http://examples.codecharge.com/TaskManager/Default.php");
}
public void login(String username, String password)
{
	driver.findElement(Administration).click();
	driver.findElement(Username).sendKeys(username);
	driver.findElement(Password).sendKeys(password);
	driver.findElement(Login).click();
}
}