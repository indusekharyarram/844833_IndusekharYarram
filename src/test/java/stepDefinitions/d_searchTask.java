package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.addTask;
import pageObjects.searchTask;

public class d_searchTask {
	searchTask enter= new searchTask();
	@Given("^open the application(\\d+)$")
	public void open_the_application(int arg1) throws Throwable {
		enter.open();
	}

	@When("^select task in Type$")
	public void select_task_in_Type() throws Throwable {
	    enter.typeTask();
	}

	@When("^click on Search$")
	public void click_on_Search() throws Throwable {
	    enter.search();
	}

	@Then("^Assert if previously added task is in the table or not$")
	public void assert_if_previously_added_task_is_in_the_table_or_not() throws Throwable {
	    enter.Assert();
	}
}
