package runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false, monochrome = true, plugin = { "pretty", "html:target/cucumber-reports",
		"com.cucumber.listener.ExtentCucumberFormatter:target/html/ExtentReport.html" }, features = {
				"C:\\magic\\POMDemo\\src\\test\\resources\\features\\googlequery.feature" }, glue = { "steps" })
public class GoogleQueryRunner extends AbstractTestNGCucumberTests {

	@AfterClass
	public static void setup() {
		Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
		// Reporter.setSystemInfo("Test User", System.getProperty("user.name"));
		Reporter.setSystemInfo("User Name", "GSSV");
		Reporter.setSystemInfo("Application Name", "CDEMO");
		Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
		Reporter.setSystemInfo("Environment", "Local");
		Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
	}
}
