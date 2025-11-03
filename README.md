# 🌐 Basic Informational Site

A simple Express.js-based informational website built as part of The Odin Project curriculum.
Originally made using Node’s core http and fs modules, this upgraded version introduces Express, dotenv, and a cleaner modular structure for better scalability and maintainability.

---

## 📖 Overview

The project displays multiple static HTML pages and demonstrates:

- Setting up an Express server with ESM (import syntax)
- Using environment variables with dotenv
- Serving static files via express.static()
- Handling routing and redirects with Express
- Sending custom 404 pages for unknown routes

---

## 🏗️ Tech Stack

- **Node.js** (v24+)
- **Express.js** (v5 -- simplified routing middleware)
- **dotenv** (environment variable management)
- **HTML5** (static pages only — no CSS or JS yet)

---

## 📂 Folder Structure

```
basic-informational-site/
├── .env
├── package.json
├── server.js
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
2. Install dependencies:

   ```bash
   pnpm install
   ```

   (Or use npm install if you prefer — your package manager is set to pnpm.)

3. Create a `.env` file (optional):
   ```bash
   PORT=4000
   ```
4. Run the server:

   ```bash
   node server.js
   ```

   or with auto-restart:

   ```bash
   pnpm start
   ```

5. Open your browser and visit:
   ```bash
   http://localhost:4000
   ```

---

## 💡 What I Learned

- Migrating a pure Node.js server to Express
- Using ES Modules (import/export) instead of require()
- Setting up and using environment variables via dotenv
- Simplifying routing and static file handling with Express middleware
- Maintaining clean folder structures for scalability

---

Built with ❤️ as part of [The Odin Project](https://www.theodinproject.com)
Node.js curriculum.
