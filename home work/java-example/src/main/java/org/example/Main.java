package org.example;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

public class Main {
    public static void main(String[] args) {
        // Create the outer JsonObject
        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("testing", "ss");
        jsonObject.addProperty("lala", "ssdsd");
        // Create the inner JsonObject for the array
        JsonObject innerObject = new JsonObject();
        innerObject.addProperty("id", "this is what I found");
        // Create the array and add the inner object
        JsonArray jsonArray = new JsonArray();
        jsonArray.add(innerObject);
        // Add the array to the outer object
        jsonObject.add("test", jsonArray);

        // Convert to JSON string
        Gson gson = new Gson();
        String jsonString = gson.toJson(jsonObject);
        System.out.println("Created JSON Object: " + jsonString);
    }
}