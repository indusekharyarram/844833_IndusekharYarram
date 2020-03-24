package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.logout;

public class g_logout {
	logout enter=new logout();
	@Given("^Launch web application$")
	public void launch_web_application() throws Throwable {
	    enter.launch();
	}

	@When("^Type username as \"([^\"]*)\" & password \"([^\"]*)\" & login to the web application$")
	public void type_username_as_password_login_to_the_web_application(String username, String password) throws Throwable {
	    enter.login(username, password);
	}

	@When("^click on logout to logout from the webApplication$")
	public void click_on_logout_to_logout_from_the_webApplication() throws Throwable {
	    enter.Logout();
	}

	@Then("^check if application is logout$")
	public void check_if_application_is_logout() throws Throwable {
	    enter.Assert();
	}
}
