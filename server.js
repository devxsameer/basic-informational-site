import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import "dotenv/config";

// Get current file & directory (needed in ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set port
const PORT = process.env.PORT || 3000;
// Serve static files from the "views" folder
app.use(express.static(path.join(__dirname, "views")));

// Routes
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "contact-me.html"));
});

app.get("/contact", (req, res) => {
  res.redirect(301, "/contact-me");
});

// Custom 404 page (MUST be last)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Basic Informational Site - listening on port ${PORT}!`);
});
