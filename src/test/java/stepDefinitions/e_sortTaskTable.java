package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.addTask;
import pageObjects.sort;

public class e_sortTaskTable {
	sort enter= new sort();
	@Given("^view the website$")
	public void view_the_website() throws Throwable {
	    enter.open();
	}

	@When("^click on finish date$")
	public void click_on_finish_date() throws Throwable {
	    enter.clickfinishDate();
	}

	@Then("^Assert if finish date is as same as previously added task finish date$")
	public void assert_if_finish_date_is_as_same_as_previously_added_task_finish_date() throws Throwable {
	    enter.Assert();
	}
}
