# Integrity Electrical Website

A production-grade, static-first website for Integrity Electrical, served via a lightweight Java server using Spark.

## 🚀 Features
*   **Engineering-First Design**: Premium layout, responsive hero strategy, and conversion-optimized forms.
*   **Clean URLs**: `/about/` serves `about/index.html` seamlessly.
*   **Production Hardened**: Security headers, sanitized inputs, and no heavy frameworks.
*   **Java/Maven Backend**: Simple `src` structure for reliable building and testing.

## 🛠 Directory Structure
```text
/
├── pom.xml                 # Maven build configuration
├── src/
│   ├── main/
│   │   ├── java/           # Server.java (Routing logic)
│   │   └── resources/
│   │       └── public/     # Static Site Root
│   │           ├── index.html
│   │           ├── about/
│   │           ├── services/
│   │           ├── contact/
│   │           ├── css/
│   │           └── js/
└── README.md
```

## 💻 Local Development

### Prerequisites
*   Java JDK 17+
*   Maven 3.8+

### Run Locally
```bash
mvn clean package
mvn exec:java
```
Access the site at: `http://localhost:4567`

## 📦 Deployment
The project builds a fat JAR containing all assets.
```bash
java -jar target/integrity-website-1.0-SNAPSHOT.jar
```

## 🔒 Security & Forms
*   Forms submit via AJAX (simulated for demo, easily connected to Web3Forms/FormSubmit).
*   Input validation ensures strict phone number formatting.
*   No external dependencies beyond SparkJava.
