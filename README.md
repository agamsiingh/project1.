
# Blog Application

A simple blog management web application built using Node.js, Express, and MongoDB, allowing users to create, update, view, and delete blog posts.

## Features

- Create, read, update, and delete blog posts.
- Server-side rendering using EJS templates.
- Data stored in MongoDB using Mongoose.
- Method override for HTTP methods like `PATCH` and `DELETE`.

## Tech Stack

- **Node.js**
- **Express.js**: Web framework for Node.js.
- **EJS**: Template engine for rendering dynamic web pages.
- **MongoDB**: NoSQL database for storing blog data.
- **Mongoose**: MongoDB object modeling tool.
- **Nodemon**: Automatically restarts the server during development.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Ensure MongoDB is running locally:
   - The app connects to MongoDB via `mongodb://127.0.0.1:27017/AppBlog`.

## Usage

- Open your browser and go to `http://localhost:8080` to access the blog.
- You can:
  - View all blogs at `/blogs`.
  - Create a new blog at `/blog/new`.
  - Edit a blog at `/blogs/:id/edit`.
  - Delete a blog by clicking the delete button.

## Folder Structure

```
/views
  /index.ejs    # List of blogs
  /show.ejs     # Display a single blog
  /new.ejs      # Form for creating a new blog
  /edit.ejs     # Form for editing a blog
/models
  /blog.js      # Blog schema definition
/public         # Static files (CSS, images)
```

## License

This project is licensed under the **ISC License**.

---

