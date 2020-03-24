package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.validLogin;

public class a_validLogin
{
	validLogin enter= new validLogin();
	@Given("^launch the browser$")
	public void launch_the_browser(){
		enter.launch();
	}

	@When("^open the application$")
	public void open_the_application() {
	    enter.open();
	}

	@When("^enter username as \"([^\"]*)\" & password \"([^\"]*)\" and click on login$")
	public void enter_username_as_password_and_click_on_login(String username, String password) {
	  enter.login(username, password);
	}

	@Then("^assert true if it is navigating to next page$")
	public void assert_true_if_it_is_navigating_to_next_page()  {
	    enter.Assert();
	}

}