package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.screenshot;

public class f_screenshot {
	screenshot enter=new screenshot();
	@Given("^Open the web application$")
	public void open_the_web_application() throws Throwable {
	    enter.open();
	}

	@When("^select task in Type and search$")
	public void select_task_in_Type_and_search() throws Throwable {
	    enter.typeTask();
	}

	@When("^take screenshot the Displayed tasks$")
	public void take_screenshot_the_Displayed_tasks() throws Throwable {
	    enter.screenshot();
	}

	@Then("^assert the tasks$")
	public void assert_the_tasks() throws Throwable {
	    enter.Assert();
	}
}
