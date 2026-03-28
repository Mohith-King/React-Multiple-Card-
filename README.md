# React Multiple Card Project

A simple React + Vite project that displays a collection of job cards in a clean, responsive layout. Each card is built with a reusable `Card` component and rendered from a list of job opening data.

## Features

- Reusable job card component
- Multiple company listings rendered with `.map()`
- Bookmark and apply button UI
- Responsive wrapped card layout
- Clean dark background with card-based design

## Tech Stack

- React 19
- Vite
- Lucide React icons
- Plain CSS

## Project Structure

```text
src/
  App.jsx
  App.css
  index.css
  main.jsx
  component/
    Card.jsx
  Props/
    Dishes.jsx
    Restaurant.jsx
    PropsDrilling/
      BranchHead.jsx
      Management.jsx
      Student.jsx
      Trainer.jsx
  assets/
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build the project for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Notes

- The job listings are currently static sample data inside `src/App.jsx`.
- The card layout and styling are controlled in `src/App.css` and `src/component/Card.jsx`.
- You can replace the sample data with API data later without changing the overall component structure.

