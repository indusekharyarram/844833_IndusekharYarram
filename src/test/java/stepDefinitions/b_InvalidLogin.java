package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.InvalidLogin;

public class b_InvalidLogin {
	InvalidLogin enter= new InvalidLogin();
	@Given("^launch the browser(\\d+)$")
	public void launch_the_browser(int arg1) throws Throwable {
		enter.launch();
	}

	@When("^Open the application(\\d+)$")
	public void open_the_application(int arg1) throws Throwable {
		enter.open();
	}

	@When("^Enter username as \"([^\"]*)\" & password \"([^\"]*)\" and click on login$")
	public void enter_username_as_password_and_click_on_login(String username, String password) throws Throwable {
		enter.login(username, password);
	}

	@Then("^Assert true if it is navigates to next page$")
	public void assert_true_if_it_is_navigates_to_next_page() throws Throwable {
		 enter.Assert();
	}
}
