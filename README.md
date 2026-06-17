# Blogs using Supabase

A simple blog management app built with **React**, **Vite**, and **Supabase**. It lets you create, view, edit, and delete blog posts, with all data stored in a Supabase (Postgres) database — no custom backend required.

## Features

- **List blogs** — view all blog posts on the home page, pulled live from Supabase
- **Create a blog** — add a new post with a title and description
- **Edit a blog** — update an existing post's title and description
- **Delete a blog** — remove a post with one click
- Client-side routing with `react-router-dom`

## Tech stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — dev server and build tool
- [Supabase](https://supabase.com/) (`@supabase/supabase-js`) — Postgres database and auto-generated API
- [React Router](https://reactrouter.com/) — client-side routing
- ESLint for linting

## Project structure

```
src/
├── components/
│   ├── Blogs.jsx        # Renders the grid of blog cards
│   ├── Item.jsx          # Single blog card (view / edit / delete)
│   ├── CreateBlog.jsx    # Form to create a new blog post
│   └── EditBlog.jsx      # Form to edit an existing blog post
├── pages/
│   └── Home.jsx           # Home page — fetches and lists all blogs
├── utils/
│   └── supabase.js        # Supabase client setup
├── App.jsx                 # Route definitions
└── main.jsx                 # App entry point
```

## Database

The app expects a Supabase table named `Blogs` with at least the following columns:

| Column        | Type      | Notes                          |
|---------------|-----------|---------------------------------|
| `id`          | `int8` / `uuid` | Primary key                |
| `title`       | `text`    | Blog title                     |
| `description` | `text`    | Blog content/description       |
| `created_at`  | `timestamp` | Defaults to current time, used for display |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- A [Supabase](https://supabase.com/) project with a `Blogs` table (see schema above)

### Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/MohamedAmr23/Blogs-using-Supabase.git
   cd Blogs-using-Supabase
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables. Create a `.env` file in the project root with your own Supabase project credentials:
   ```
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
   ```

   > **Note:** A `.env` file with sample credentials currently exists in this repo. For any real deployment, generate your own Supabase project and keys, set up Row Level Security (RLS) policies on the `Blogs` table to control who can insert/update/delete, and avoid committing `.env` to version control going forward.

4. Run the dev server:
   ```bash
   npm run dev
   ```

5. Open the app at the local URL Vite prints (typically `http://localhost:5173`).

### Available scripts

| Command           | Description                       |
|--------------------|------------------------------------|
| `npm run dev`      | Start the Vite development server |
| `npm run build`    | Build the app for production       |
| `npm run preview`  | Preview the production build       |
| `npm run lint`     | Run ESLint                          |

## Routes

| Path              | Page          | Description                       |
|--------------------|---------------|------------------------------------|
| `/`                | Home          | Lists all blog posts              |
| `/create-blog`     | Create Blog   | Form to add a new post            |
| `/edit-blog/:id`   | Edit Blog     | Form to edit a post by its ID     |

## Possible improvements

- Add authentication (e.g. Supabase Auth) so only logged-in users can create/edit/delete posts
- Add Row Level Security policies to the `Blogs` table
- Add confirmation dialogs before delete instead of relying on `alert`/`window.location.reload()`
- Add pagination or search/filtering for larger lists of blogs
- Add rich text or markdown support for blog descriptions

## License

No license specified.
