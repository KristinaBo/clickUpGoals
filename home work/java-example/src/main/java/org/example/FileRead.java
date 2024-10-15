package org.example;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.io.*;
import java.nio.charset.StandardCharsets;


public class FileRead {

        public static void main(String[] args) {
            // Читання JSON-файлу
            String jsonData = readJsonFileFromResources("/spaces.json");

            // Парсинг JSON-даних за допомогою Gson
            Gson gson = new Gson();
            JsonObject jsonObject = gson.fromJson(jsonData, JsonObject.class);
//
//            // Отримання і виведення окремих значень
//            String name = jsonObject.get("name").getAsString();
//            int age = jsonObject.get("age").getAsInt();
//            String city = jsonObject.get("city").getAsString();
//
//            System.out.println("Name: " + name);
//            System.out.println("Age: " + age);
//            System.out.println("City: " + city);

            // Обробка масиву з JSON
            JsonArray foldersArray = jsonObject.get("folders").getAsJsonArray();
            System.out.print("foldersArray: ");
            for (int i = 0; i < foldersArray.size(); i++) {
                System.out.println(foldersArray.get(i).getAsJsonObject());
                System.out.println("");
                if (i != foldersArray.size() - 1) {
                    System.out.print(", ");
                }
            }
        }

        // Метод для читання JSON-файлу
        public static String readJsonFileFromResources(String fileName) {
            StringBuilder jsonData = new StringBuilder();
            try (InputStream inputStream = Main.class.getResourceAsStream(fileName);
                 BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    jsonData.append(line);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            return jsonData.toString();
        }
    }