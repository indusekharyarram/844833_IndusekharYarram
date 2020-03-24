package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "feature//feature.feature",
		glue= {"stepDefinitions"},
		monochrome = true
		)
public class testRunner {
	
}