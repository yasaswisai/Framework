package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GoogleQueryPOM {

	static WebDriver webDriver;

	@FindBy(xpath = "//input[@name = 'q']")
	public WebElement q;

	public GoogleQueryPOM(WebDriver webDriver) {
		// TODO Auto-generated constructor stub
		GoogleQueryPOM.webDriver = webDriver;
		PageFactory.initElements(this.webDriver, this);
	}
	
	

	public void navigate(String url) {
		webDriver.navigate().to(url);
	}

	public void sendQuery(String query) {
		q.sendKeys(query);
	}

}
