import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonArray;

public class Main {
    public static void main(String[] args) {
        Gson gson = new Gson();

        try (FileReader reader = new FileReader("spaces.json")) {
            JsonObject json = gson.fromJson(reader, JsonObject.class);
            JsonArray folders = json.getAsJsonArray("folders");

            for (var folderElement : folders) {
                JsonObject folder = folderElement.getAsJsonObject();
                JsonArray lists = folder.getAsJsonArray("lists");

                for (var listElement : lists) {
                    JsonObject list = listElement.getAsJsonObject();
                    System.out.println("List ID: " + list.get("id").getAsString());

                    if (list.get("name").getAsString().startsWith("test")) {
                        JsonObject space = list.getAsJsonObject("space");
                        System.out.println("Space Name: " + space.get("name").getAsString());
                        System.out.println("Space ID: " + space.get("id").getAsString());
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}