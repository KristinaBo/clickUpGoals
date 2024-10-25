package org.example.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.restassured.response.Response;

public class ApiTagsStepsNew extends  BaseSteps{

    @Given("Sent request to get folders")
    public void getAllFolder() {
        Response response = tagsRestClient.getTags();
        sharedTestData.setResponse(response);
    }

//    @When("Create folder form file {}")
//    public void createFolderFromFile(String path){
//        RandomData randomData = new RandomData();
//        String randomName = "my folder" + randomData.generateRandomString(7);
//        String source = "data/folders/" + path;
//        JSONObject body = ResourceUtils.readJson(source);
//        Response response = tagsRestClient.postTagFromFile(body.toString());
//        sharedTestData.setResponse(response);
//    }

    @When("Get user tag spaces")
    public void getTags(){
        Response response = tagsRestClient.getTags();
        sharedTestData.setResponse(response);
    }
}
