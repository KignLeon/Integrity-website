package com.integrityelectrical;

import static spark.Spark.*;

public class Server {

    public static void main(String[] args) {
        // Set Port (Heroku compatible or default 4567)
        port(getHerokuAssignedPort());

        // Serve Static Files from src/main/resources/public
        staticFiles.location("/public");
        
        // --- Clean URL Routing ---
        // Map /folder/ to /folder/index.html
        
        get("/", (req, res) -> {
            res.redirect("/index.html");
            return null;
        });

        // About
        get("/about", (req, res) -> {
            if (!req.uri().endsWith("/")) { res.redirect(req.uri() + "/"); return null; }
            return null; // Let static file handler catch /about/index.html? 
            // Spark static files usually act as fallback. 
            // Better approach: explicit forwarding.
        });
        
        // Explicit mapping for directories to their index.html
        // This ensures http://localhost:4567/about/ works
        
        // We rely on Spark's default static file serving index.html for directories if configured?
        // Spark doesn't auto-serve index.html for directories by default unless configured.
        // Let's force specific clean routes for our known structure.

        get("/about/", (req, res) -> {
            res.type("text/html");
            return Server.class.getResourceAsStream("/public/about/index.html"); // Stream manually or redirect
        });
        
        // Actually, simpler: 
        // Spark serves "/foo.html" if it exists.
        // If user requests "/about/", Spark check static "/about/index.html".
        // Let's verify behavior. Usually Spark staticFiles serves files directly. 
        // If we want "/about/" to work, we need a file named "about" or a route.
        
        notFound((req, res) -> {
            String path = req.pathInfo();
            if (!path.endsWith("/")) {
                 res.redirect(path + "/");
                 return null;
            }
            return "404 - Page Not Found"; 
        });
        
        System.out.println("⚡ Integrity Electrical Server Running on port " + port());
    }

    static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 4567; // Return default port if heroku-port isn't set (i.e. on localhost)
    }
}
