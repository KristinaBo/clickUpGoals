package org.example.steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.UUID;

public class ApiTagsStepDefinition extends BaseSteps {
    Response response;
    String createdTagName;
    static String updatedTagName; // Make updatedTagName static

    @Given("Create tag in space")
    public void createTag() {
        createdTagName = "Tag Name " + UUID.randomUUID().toString();
        String payload = "{\n" +
                "  \"tag\": {\n" +
                "    \"name\": \"" + createdTagName + "\",\n" +
                "    \"tag_fg\": \"#000000\",\n" +
                "    \"tag_bg\": \"#000000\"\n" +
                "  }\n" +
                "}";

        response = tagsRestClient.createTag(payload);
        sharedTestData.setResponse(response);
    }

    @And("Update tag in space")
    public String updateTagInSpace() {
        String tagName = getTagName();

        updatedTagName = "Updated Tag Name " + UUID.randomUUID();
        String updatePayload = "{\n" +
                "  \"tag\": {\n" +
                "    \"name\": \"" + updatedTagName + "\",\n" +
                "    \"tag_fg\": \"#000000\",\n" +
                "    \"tag_bg\": \"#000000\"\n" +
                "  }\n" +
                "}";

        response = tagsRestClient.updateTag(updatePayload, tagName);

        sharedTestData.setResponse(response);
        return sharedTestData.getResponseBody();
    }

    @When("Get tags from space")
    public String getTagsFromSpace() {
        response = tagsRestClient.getTags();
        sharedTestData.setResponse(response);

        return response.getBody().asString();
    }

    @And("Delete tag")
    public void deleteTag() {
        String tagName = getTagName();

        response = tagsRestClient.deleteTags(tagName);
        sharedTestData.setResponse(response);
    }

    private String getTagName() {
        Response getTagsResponse = tagsRestClient.getTags();
        String responseBody = getTagsResponse.getBody().asString();
        JSONObject obj = new JSONObject(responseBody);
        JSONArray tags = obj.getJSONArray("tags");
        JSONObject tag = tags.getJSONObject(0);
        String tagName = tag.getString("name");
        return tagName;
    }
}