package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = {"src/test/java/Features"},
		glue = {"Definitions", "Hooks"},
		monochrome = true,
		//dryRun = true,
		//tags = {"@filter", "@delete"},
		plugin = {
				"pretty",
				"html: Reports"
				}
		)

public class RunConfigurations {

}
