package org.example.steps;

import io.cucumber.java.en.Then;
import io.restassured.response.Response;
import org.json.JSONArray;
import org.json.JSONObject;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class ResponseSteps extends BaseSteps {

    @Then("Response status should be {int}")
    public void responseStatusShouldBe(int status) {
        sharedTestData.getResponse().then().statusCode(status);
    }

    @Then("Tag name is updated")
    public void tagNameIsUpdated() {
        Response response = sharedTestData.getResponse();
        String responseBody = response.getBody().asString();
        JSONObject obj = new JSONObject(responseBody);
        JSONArray tags = obj.getJSONArray("tags");

        // Verify the updated tag name is present in the array of tags
        boolean isUpdatedTagPresent = false;
        for (int i = 0; i < tags.length(); i++) {
            JSONObject tag = tags.getJSONObject(i);
            String tagName = tag.getString("name");
            if (tagName.equals(ApiTagsStepDefinition.updatedTagName)) { // Access updatedTagName
                isUpdatedTagPresent = true;
                break;
            }
        }
        assertTrue("Updated tag name should be present in the array of tags", isUpdatedTagPresent);

        // Verify the very first tag is the updated one
        String firstTagName = tags.getJSONObject(0).getString("name");
        assertEquals("The first tag should be the updated one", ApiTagsStepDefinition.updatedTagName, firstTagName); // Access updatedTagName
    }
}