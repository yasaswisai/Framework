package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import com.sun.tools.internal.xjc.Driver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import pageobjects.GoogleQueryPOM;

public class GoogleQueryStep {

	ChromeOptions options;
	WebDriver chromeDriver;
	GoogleQueryPOM googleQueryPOM;

	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\ProgramData\\Chrome_driver_79.0.3945.16\\chromedriver.exe");
		options = new ChromeOptions();
		options.addArguments("start-maximized");
		options.addArguments("incognito");
		options.setExperimentalOption("useAutomationExtension", false);
		chromeDriver = new ChromeDriver(options);
		googleQueryPOM = new GoogleQueryPOM(chromeDriver);
	}

	@After
	public void cleanup() {
		chromeDriver.quit();
	}

	@Given("^User enteres \"([^\"]*)\"$")
	public void user_enteres(String url) throws Throwable {
		googleQueryPOM = new GoogleQueryPOM(chromeDriver);
		googleQueryPOM.navigate(url);
	}

	@Given("^User enters \"([^\"]*)\" in query$")
	public void user_enters_in_query(String query) throws Throwable {
		googleQueryPOM.sendQuery(query);
	}

	@When("^User clicks Enter$")
	public void user_clicks_Enter() throws Throwable {
		Actions actions = new Actions(chromeDriver);
		actions.sendKeys(Keys.ENTER).build().perform();
	}

	@Then("^User should be able to search results \"([^\"]*)\"$")
	public void user_should_be_able_to_search_results(String arg1) throws Throwable {
		Assert.assertEquals(chromeDriver.getTitle(), arg1);
	}
}
