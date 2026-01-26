package com.integrity;

import static spark.Spark.*;
import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // Set port (default 8080)
        port(getHerokuAssignedPort());

        // Serve static files from src/main/resources/public
        staticFiles.location("/public");

        Gson gson = new Gson();

        // API Endpoint for Consultations
        post("/api/consultation", (req, res) -> {
            res.type("application/json");
            
            // In a real app, you would parse the body and save to DB/Email
            Map<String, String> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Consultation request received successfully.");
            
            return gson.toJson(response);
        });

        // Redirect all non-API paths to index.html for single-page feel
        get("/", (req, res) -> {
            res.redirect("/index.html");
            return null;
        });

        System.out.println("Integrity Electrical Server started on port " + port());
    }

    static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 8080; 
    }
}