$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/feature.feature");
formatter.feature({
  "line": 1,
  "name": "http://examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter username as \"\u003cusername\u003e\" \u0026 password \"\u003cpassword\u003e\" and click on login",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 9,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;2"
    },
    {
      "cells": [
        "aadmin",
        "aadmin"
      ],
      "line": 10,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;3"
    },
    {
      "cells": [
        "badmin",
        "badmin"
      ],
      "line": 11,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter username as \"admin\" \u0026 password \"admin\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "a_validLogin.launch_the_browser()"
});
formatter.result({
  "duration": 8768823616,
  "status": "passed"
});
formatter.match({
  "location": "a_validLogin.open_the_application()"
});
formatter.result({
  "duration": 4421114268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "admin",
      "offset": 38
    }
  ],
  "location": "a_validLogin.enter_username_as_password_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 6788126547,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter username as \"aadmin\" \u0026 password \"aadmin\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "a_validLogin.launch_the_browser()"
});
formatter.result({
  "duration": 3421524815,
  "status": "passed"
});
formatter.match({
  "location": "a_validLogin.open_the_application()"
});
formatter.result({
  "duration": 2268210874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aadmin",
      "offset": 19
    },
    {
      "val": "aadmin",
      "offset": 39
    }
  ],
  "location": "a_validLogin.enter_username_as_password_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 3509937823,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter username as \"badmin\" \u0026 password \"badmin\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "a_validLogin.launch_the_browser()"
});
formatter.result({
  "duration": 3932867738,
  "status": "passed"
});
formatter.match({
  "location": "a_validLogin.open_the_application()"
});
formatter.result({
  "duration": 7230455359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "badmin",
      "offset": 19
    },
    {
      "val": "badmin",
      "offset": 39
    }
  ],
  "location": "a_validLogin.enter_username_as_password_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 3480700661,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "add Task in examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;add-task-in-examples.codecharge.com/taskmanager/default.php",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "open the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on Administration2",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on add task",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "enter all fields",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select Start Date",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "select End Date",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "click on Add button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "assert if added task is shown in task list table",
  "keyword": "Then "
});
formatter.match({
  "location": "c_addTask.open_the_Application()"
});
formatter.result({
  "duration": 5920353215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "c_addTask.click_on_Administration(int)"
});
formatter.result({
  "duration": 1905817257,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.login_with_valid_credentials()"
});
formatter.result({
  "duration": 1225828999,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.click_on_add_task()"
});
formatter.result({
  "duration": 2578051294,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.enter_all_fields()"
});
formatter.result({
  "duration": 690919093,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.select_Start_Date()"
});
formatter.result({
  "duration": 1997259080,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.select_End_Date()"
});
formatter.result({
  "duration": 1437843577,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.click_on_Add_button()"
});
formatter.result({
  "duration": 1982713885,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.assert_if_added_task_is_shown_in_task_list_table()"
});
formatter.result({
  "duration": 79855652,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search Task in Type",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;search-task-in-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "open the application7",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "select task in Type",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click on Search",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Assert if previously added task is in the table or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    }
  ],
  "location": "d_searchTask.open_the_application(int)"
});
formatter.result({
  "duration": 7971335039,
  "status": "passed"
});
formatter.match({
  "location": "d_searchTask.select_task_in_Type()"
});
formatter.result({
  "duration": 63087853,
  "status": "passed"
});
formatter.match({
  "location": "d_searchTask.click_on_Search()"
});
formatter.result({
  "duration": 1804542301,
  "status": "passed"
});
formatter.match({
  "location": "d_searchTask.assert_if_previously_added_task_is_in_the_table_or_not()"
});
formatter.result({
  "duration": 65686620,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Sort the Task Table according to finish date",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;sort-the-task-table-according-to-finish-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "view the website",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "click on finish date",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Assert if finish date is as same as previously added task finish date",
  "keyword": "Then "
});
formatter.match({
  "location": "e_sortTaskTable.view_the_website()"
});
formatter.result({
  "duration": 19798827476,
  "status": "passed"
});
formatter.match({
  "location": "e_sortTaskTable.click_on_finish_date()"
});
formatter.result({
  "duration": 4023894395,
  "status": "passed"
});
formatter.match({
  "location": "e_sortTaskTable.assert_if_finish_date_is_as_same_as_previously_added_task_finish_date()"
});
formatter.result({
  "duration": 77479093,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "screenshot the type Type from the page",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;screenshot-the-type-type-from-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Open the web application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "select task in Type and search",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "take screenshot the Displayed tasks",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "assert the tasks",
  "keyword": "Then "
});
formatter.match({
  "location": "f_screenshot.open_the_web_application()"
});
formatter.result({
  "duration": 31758435218,
  "status": "passed"
});
formatter.match({
  "location": "f_screenshot.select_task_in_Type_and_search()"
});
formatter.result({
  "duration": 5664984276,
  "status": "passed"
});
formatter.match({
  "location": "f_screenshot.take_screenshot_the_Displayed_tasks()"
});
formatter.result({
  "duration": 3258774946,
  "status": "passed"
});
formatter.match({
  "location": "f_screenshot.assert_the_tasks()"
});
formatter.result({
  "duration": 42677470,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Logout from the application",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;logout-from-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "Launch web application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Type username as \"\u003cusername\u003e\" \u0026 password \"\u003cpassword\u003e\" \u0026 login to the web application",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "click on logout to logout from the webApplication",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "check if application is logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;logout-from-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 47,
      "id": "http://examples.codecharge.com/taskmanager/default.php;logout-from-the-application;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 48,
      "id": "http://examples.codecharge.com/taskmanager/default.php;logout-from-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Logout from the application",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;logout-from-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "Launch web application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Type username as \"admin\" \u0026 password \"admin\" \u0026 login to the web application",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "click on logout to logout from the webApplication",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "check if application is logout",
  "keyword": "Then "
});
formatter.match({
  "location": "g_logout.launch_web_application()"
});
formatter.result({
  "duration": 23409404418,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027YSR9440236052\u0027, ip: \u0027192.168.43.224\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:202)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat pageObjects.logout.launch(logout.java:17)\r\n\tat stepDefinitions.g_logout.launch_web_application(g_logout.java:12)\r\n\tat ✽.Given Launch web application(feature/feature.feature:42)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:48877/status] to be available after 20001 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat pageObjects.logout.launch(logout.java:17)\r\n\tat stepDefinitions.g_logout.launch_web_application(g_logout.java:12)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.base/java.util.concurrent.FutureTask.get(FutureTask.java:204)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 67 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    },
    {
      "val": "admin",
      "offset": 37
    }
  ],
  "location": "g_logout.type_username_as_password_login_to_the_web_application(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "g_logout.click_on_logout_to_logout_from_the_webApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "g_logout.check_if_application_is_logout()"
});
formatter.result({
  "status": "skipped"
});
});