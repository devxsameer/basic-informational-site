# 🌐 Basic Informational Site

A simple Node.js-based informational website built as part of **The Odin Project** curriculum.  
This project serves as an introduction to creating a basic web server using Node’s built-in `http` and `fs` modules — without any external frameworks.

---

## 📖 Overview

The project displays multiple static HTML pages and demonstrates:

- Basic routing using Node’s `http` module
- Serving static HTML files with `fs.readFile()`
- Setting HTTP status codes and headers
- Handling redirects (e.g., `/contact` → `/contact-me`)
- Returning a custom `404.html` page for unknown routes

---

## 🏗️ Tech Stack

- **Node.js** (core modules: `http`, `fs`)
- **HTML5** (static pages only — no CSS or JS yet)

---

## 📂 Folder Structure

```
basic-informational-site/
├── package.json
├── server.mjs
└── views/
    ├── index.html
    ├── about.html
    ├── contact-me.html
    └── 404.html
```

---

## 🔁 Routes

| Route         | Description                |
| ------------- | -------------------------- |
| `/`           | Home page                  |
| `/about`      | About page                 |
| `/contact-me` | Contact page               |
| `/contact`    | Redirects to `/contact-me` |
| _(any other)_ | Custom 404 page            |

---

## ⚙️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/devxsameer/basic-informational-site.git
   cd basic-informational-site
   ```
2. Run the server:
   ```bash
   node server.mjs
   ```
3. Open your browser and visit:
   ```bash
   http://localhost:3000
   ```

---

## 💡 What I Learned

- Setting up a basic HTTP server without Express
- Reading and serving HTML files using Node’s file system module
- Understanding status codes, redirects, and basic routing logic
- Organizing project structure cleanly for small server-based sites

---

Built with ❤️ as part of [The Odin Project](https://www.theodinproject.com)
Node.js curriculum.
