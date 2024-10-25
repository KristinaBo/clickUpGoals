package org.example.rest;

import io.restassured.response.Response;

public class TagsRestClient extends BaseRestClient {
    String tagsUrl = "space/90121457888/tag";

    public TagsRestClient() {
        this.setUpRestAssured();
    }

    public Response getTags() {
        return this.requestSpec.get(tagsUrl);
    }

    public Response createTag(String payload) {
        return this.requestSpec
                .body(payload)
                .post(tagsUrl);
    }

    public Response updateTag(String payload, String tagName) {
        return this.requestSpec
                .body(payload)
                .put(tagsUrl + "/" + tagName);
    }

    public Response deleteTags(String tagName) {
        return this.requestSpec.delete(tagsUrl + "/" + tagName);
    }
}
